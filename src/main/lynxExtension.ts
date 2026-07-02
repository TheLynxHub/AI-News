import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {MainIpcApi} from '@lynx_main/plugins/extensions/ipcWrapper';
import {ExtensionMainApi, MainExtensionUtils} from '@lynx_main/plugins/extensions/types';
import axios from 'axios';
import {ipcMain} from 'electron';
import Parser from 'rss-parser';

const DEFAULT_SOURCES: NewsSource[] = [
  {
    id: 'venturebeat-ai',
    name: 'VentureBeat AI',
    type: 'website',
    url: 'https://venturebeat.com/category/ai',
    feedUrl: 'https://venturebeat.com/category/ai/feed/',
    enabled: true,
  },
  {
    id: 'techcrunch-ai',
    name: 'TechCrunch AI',
    type: 'website',
    url: 'https://techcrunch.com/category/artificial-intelligence/',
    feedUrl: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    enabled: true,
  },
  {
    id: 'youtube-theaisearch',
    name: 'AI Search',
    type: 'youtube',
    url: 'https://www.youtube.com/@theAIsearch',
    feedUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCIgnGlGkVRhd4qNFcEwLL4A',
    enabled: true,
  },
  {
    id: 'youtube-mreflow',
    name: 'Matt Wolfe',
    type: 'youtube',
    url: 'https://www.youtube.com/@mreflow',
    feedUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UChpleBmo18P08aKCIgti38g',
    enabled: true,
  },
];

export async function initialExtension(lynxApi: ExtensionMainApi, utils: MainExtensionUtils, _mainIpc: MainIpcApi) {
  const storageManager = await utils.getStorageManager();
  const appManager = await utils.getAppManager();

  // Initialize keys in keyToExtensionMap to route storage calls correctly
  storageManager.getCustomData('ai-news::sources');
  storageManager.getCustomData('ai-news::cache');
  storageManager.getCustomData('ai-news::lastFetched');

  const parser = new Parser({
    customFields: {
      item: [
        ['yt:videoId', 'videoId'],
        ['media:group', 'mediaGroup'],
      ],
    },
  });

  // Load existing configuration or defaults
  const getSources = (): NewsSource[] => {
    const stored = storageManager.getCustomData('ai-news::sources');
    if (!stored || !Array.isArray(stored) || stored.length === 0) {
      storageManager.setCustomData('ai-news::sources', DEFAULT_SOURCES);
      storageManager.write();
      return DEFAULT_SOURCES;
    }
    return stored;
  };

  const getCachedItems = (): NewsItem[] => {
    const cached = storageManager.getCustomData('ai-news::cache');
    return Array.isArray(cached) ? cached : [];
  };

  const getLastFetched = (): number => {
    const lf = storageManager.getCustomData('ai-news::lastFetched');
    return typeof lf === 'number' ? lf : 0;
  };

  // Extract video ID from youtube feeds
  const getYoutubeVideoId = (item: any): string => {
    if (item.videoId) return item.videoId;
    const linkMatch = item.link?.match(/(?:v=|\/embed\/|\/watch\?v=)([a-zA-Z0-9_-]{11})/);
    if (linkMatch) return linkMatch[1];
    const idMatch = item.id?.match(/yt:video:([a-zA-Z0-9_-]{11})/);
    if (idMatch) return idMatch[1];
    return '';
  };

  // Find image thumbnail inside html content snippet
  const extractImageFromHtml = (content: string): string => {
    if (!content) return '';
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = content.match(imgRegex);
    return match ? match[1] : '';
  };

  // Background feeds update logic
  const fetchAndCacheAllFeeds = async (force = false) => {
    const sources = getSources();
    const currentCache = getCachedItems();
    const now = Date.now();

    // Check rate limit (only fetch every 5 mins unless forced)
    if (!force && now - getLastFetched() < 5 * 60 * 1000) {
      console.log('AI News: Skipping background fetch (fetched recently)');
      return;
    }

    console.log('AI News: Fetching feeds started...');
    const updatedCacheMap = new Map<string, NewsItem[]>();

    // Index previous items by source to fallback on failure
    for (const item of currentCache) {
      if (!updatedCacheMap.has(item.sourceId)) {
        updatedCacheMap.set(item.sourceId, []);
      }
      updatedCacheMap.get(item.sourceId)!.push(item);
    }

    for (const src of sources) {
      if (!src.enabled) {
        // Keep their cache in case they get re-enabled later
        continue;
      }

      try {
        console.log(`AI News: Fetching source ${src.name} (${src.feedUrl})...`);
        const feed = await parser.parseURL(src.feedUrl);
        const parsedItems: NewsItem[] = [];

        const itemsToProcess = feed.items.slice(0, 40); // Cap at 40 items per source
        for (const item of itemsToProcess) {
          let thumbnail = '';
          let snippet = item.contentSnippet || item.content || '';
          if (snippet.length > 250) {
            snippet = snippet.substring(0, 247) + '...';
          }

          if (src.type === 'youtube') {
            const videoId = getYoutubeVideoId(item);
            if (videoId) {
              thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }
          } else {
            thumbnail = extractImageFromHtml(item.content || '') || item.enclosure?.url || '';
          }

          const id = item.guid || (item as any).id || item.link || Math.random().toString(36).substring(7);

          parsedItems.push({
            id,
            sourceId: src.id,
            sourceName: src.name,
            title: item.title || 'Untitled',
            link: item.link || '',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            isoDate: item.isoDate || new Date().toISOString(),
            thumbnail,
            snippet,
            type: src.type,
          });
        }

        updatedCacheMap.set(src.id, parsedItems);
      } catch (err) {
        console.error(`AI News: Failed to fetch feed for source ${src.name}:`, err);
        // Do not update the map so we keep the previous cached items for this source
      }
    }

    // Flatten map, filter out disabled source items, and sort by date descending
    const activeSourceIds = new Set(sources.filter(s => s.enabled).map(s => s.id));
    let newMergedCache: NewsItem[] = [];
    for (const [sourceId, items] of updatedCacheMap.entries()) {
      if (activeSourceIds.has(sourceId)) {
        newMergedCache.push(...items);
      }
    }

    newMergedCache.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

    // Cap global cache at 200 items to avoid bloating config
    if (newMergedCache.length > 200) {
      newMergedCache = newMergedCache.slice(0, 200);
    }

    // Write to storage
    storageManager.setCustomData('ai-news::cache', newMergedCache);
    storageManager.setCustomData('ai-news::lastFetched', Date.now());
    storageManager.write();

    console.log('AI News: Cache successfully updated. Broadcasting state...');

    // Broadcast update to renderer process
    appManager.sendMessage('lynxhub-ai-news:state-updated', {
      sources,
      cache: newMergedCache,
      lastFetched: Date.now(),
    });
  };

  // Start feed fetching sequence
  lynxApi.onAppReady(async () => {
    console.log('AI News backend ready, starting initial feed load...');
    // Initial load
    fetchAndCacheAllFeeds(false).catch(err => console.error('AI News initial load failed:', err));

    // Schedule background updates every 30 minutes
    setInterval(
      () => {
        fetchAndCacheAllFeeds(false).catch(err => console.error('AI News background load failed:', err));
      },
      30 * 60 * 1000,
    );
  });

  // Handle frontend requests via IPC
  lynxApi.listenForChannels(() => {
    // Get full state (cache, sources, lastFetched)
    ipcMain.handle('lynxhub-ai-news:get-state', () => {
      return {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
      };
    });

    // Manually refresh all feeds
    ipcMain.handle('lynxhub-ai-news:refresh', async () => {
      await fetchAndCacheAllFeeds(true);
      return {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
      };
    });

    // Toggle sources or enable/disable them
    ipcMain.handle('lynxhub-ai-news:update-sources', async (_, updatedSources: NewsSource[]) => {
      storageManager.setCustomData('ai-news::sources', updatedSources);
      storageManager.write();
      // Re-fetch since sources changed
      await fetchAndCacheAllFeeds(true);
      return {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
      };
    });

    // Verify and add custom news source (discover RSS/YouTube ID)
    ipcMain.handle('lynxhub-ai-news:add-custom-source', async (_, type: 'website' | 'youtube', url: string) => {
      const sources = getSources();
      const cleanUrl = url.trim();

      if (type === 'youtube') {
        const discovered = await getYoutubeChannelId(cleanUrl);
        if (!discovered) {
          throw new Error('Could not find YouTube channel details for this URL/handle.');
        }

        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${discovered.channelId}`;
        // Check duplicate
        if (sources.some(s => s.feedUrl === feedUrl)) {
          throw new Error('This channel is already added.');
        }

        const newSource: NewsSource = {
          id: `youtube-${discovered.channelId}`,
          name: discovered.name,
          type: 'youtube',
          url: cleanUrl.startsWith('http')
            ? cleanUrl
            : `https://www.youtube.com/${cleanUrl.startsWith('@') ? '' : '@'}${cleanUrl}`,
          feedUrl,
          enabled: true,
        };

        const updated = [...sources, newSource];
        storageManager.setCustomData('ai-news::sources', updated);
        storageManager.write();
        await fetchAndCacheAllFeeds(true);
        return {
          sources: getSources(),
          cache: getCachedItems(),
          lastFetched: getLastFetched(),
        };
      } else {
        const discovered = await getWebsiteFeedDetails(cleanUrl);
        if (!discovered) {
          throw new Error('Could not find working RSS feed for this website.');
        }

        // Check duplicate
        if (sources.some(s => s.feedUrl === discovered.feedUrl)) {
          throw new Error('This website feed is already added.');
        }

        const newSource: NewsSource = {
          id: `website-${Math.random().toString(36).substring(7)}`,
          name: discovered.name,
          type: 'website',
          url: cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`,
          feedUrl: discovered.feedUrl,
          enabled: true,
        };

        const updated = [...sources, newSource];
        storageManager.setCustomData('ai-news::sources', updated);
        storageManager.write();
        await fetchAndCacheAllFeeds(true);
        return {
          sources: getSources(),
          cache: getCachedItems(),
          lastFetched: getLastFetched(),
        };
      }
    });
  });
}

// Youtube Channel scraper
async function getYoutubeChannelId(input: string): Promise<{channelId: string; name: string} | null> {
  let url = input.trim();
  if (!url.startsWith('http')) {
    if (url.startsWith('@')) {
      url = `https://www.youtube.com/${url}`;
    } else {
      url = `https://www.youtube.com/@${url}`;
    }
  }

  const directMatch = url.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/);
  if (directMatch) {
    return {channelId: directMatch[1], name: directMatch[1]};
  }

  try {
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
      },
      timeout: 10000,
    });
    const html = res.data;

    const channelIdMatch =
      html.match(/meta itemprop="channelId" content="([^"]+)"/) ||
      html.match(/"channelId":"(UC[^"]+)"/) ||
      html.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/);
    const nameMatch =
      html.match(/meta property="og:title" content="([^"]+)"/) ||
      html.match(/"title":"([^"]+)"/) ||
      html.match(/<title>([^<]+)<\/title>/);

    if (channelIdMatch) {
      const channelId = channelIdMatch[1];
      let name = nameMatch ? nameMatch[1] : '';
      if (name.endsWith(' - YouTube')) name = name.replace(' - YouTube', '');
      return {channelId, name: name || channelId};
    }
  } catch (err) {
    console.error('Failed to get Youtube channel ID:', err);
  }
  return null;
}

// Website feed discoverer
async function getWebsiteFeedDetails(input: string): Promise<{feedUrl: string; name: string} | null> {
  let url = input.trim();
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }

  try {
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
      },
      timeout: 10000,
    });
    const html = res.data;

    const rssMatch =
      html.match(/<link[^>]+type=["'](application\/rss\+xml|application\/atom\+xml)["'][^>]+href=["']([^"']+)["']/i) ||
      html.match(/<link[^>]+href=["']([^"']+)["'][^>]+type=["'](application\/rss\+xml|application\/atom\+xml)["']/i);

    let feedUrl = '';
    if (rssMatch) {
      feedUrl = rssMatch[2] || rssMatch[1];
    } else {
      const urlObj = new URL(url);
      const commonPaths = ['/feed', '/rss', '/feed.xml', '/rss.xml'];
      for (const path of commonPaths) {
        try {
          const checkUrl = urlObj.origin + path;
          const checkRes = await axios.get(checkUrl, {timeout: 3000});
          if (checkRes.status === 200 && (checkRes.data.includes('<rss') || checkRes.data.includes('<feed'))) {
            feedUrl = checkUrl;
            break;
          }
        } catch {
          // ignore
        }
      }
    }

    if (feedUrl) {
      if (feedUrl.startsWith('/')) {
        const urlObj = new URL(url);
        feedUrl = urlObj.origin + feedUrl;
      }

      const titleMatch =
        html.match(/<title>([^<]+)<\/title>/) || html.match(/meta property="og:title" content="([^"]+)"/);
      let name = titleMatch ? titleMatch[1] : '';
      if (!name) {
        const urlObj = new URL(url);
        name = urlObj.hostname;
      }
      return {feedUrl, name: name.trim()};
    }
  } catch (err) {
    console.error('Failed to get website feed details:', err);
  }
  return null;
}
