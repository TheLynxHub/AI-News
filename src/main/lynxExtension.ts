import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {MainIpcApi} from '@lynx_main/plugins/extensions/ipcWrapper';
import {ExtensionMainApi, MainExtensionUtils} from '@lynx_main/plugins/extensions/types';
import axios from 'axios';
import {ipcMain} from 'electron';
import Parser from 'rss-parser';

import {DEFAULT_SOURCES, DEFAULT_SOURCES_VERSION} from './defaultSources';

const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

// noinspection JSUnusedGlobalSymbols
export async function initialExtension(lynxApi: ExtensionMainApi, utils: MainExtensionUtils, _mainIpc: MainIpcApi) {
  const storageManager = await utils.getStorageManager();
  const appManager = await utils.getAppManager();

  // Initialize keys in keyToExtensionMap to route storage calls correctly
  storageManager.getCustomData('ai-news::sources');
  storageManager.getCustomData('ai-news::sourcesVersion');
  storageManager.getCustomData('ai-news::filterSelection');
  storageManager.getCustomData('ai-news::cache');
  storageManager.getCustomData('ai-news::lastFetched');
  storageManager.getCustomData('ai-news::homeView');
  storageManager.getCustomData('ai-news::showInHome');
  storageManager.getCustomData('ai-news::itemsPerPage');

  const parser = new Parser({
    customFields: {
      item: [
        ['yt:videoId', 'videoId'],
        ['media:group', 'mediaGroup'],
      ],
    },
  });

  // Load existing configuration or defaults with migrations
  const getSources = (): NewsSource[] => {
    let stored = storageManager.getCustomData('ai-news::sources');
    const storedVersion = storageManager.getCustomData('ai-news::sourcesVersion');

    if (!stored || !Array.isArray(stored) || stored.length === 0) {
      storageManager.setCustomData('ai-news::sources', DEFAULT_SOURCES);
      storageManager.setCustomData('ai-news::sourcesVersion', DEFAULT_SOURCES_VERSION);
      storageManager.write();
      return DEFAULT_SOURCES;
    }

    if (storedVersion !== DEFAULT_SOURCES_VERSION) {
      console.log(
        `AI News: Migrating default sources from ${storedVersion || 'initial'} to ${DEFAULT_SOURCES_VERSION}`,
      );
      const defaultIds = new Set(DEFAULT_SOURCES.map(d => d.id));
      const customSources = stored.filter(s => !defaultIds.has(s.id));

      const migratedDefaults = DEFAULT_SOURCES.map(def => {
        const existing = stored.find(s => s.id === def.id);
        return {
          ...def,
          enabled: existing ? existing.enabled : def.enabled,
        };
      });

      const updated = [...migratedDefaults, ...customSources];
      storageManager.setCustomData('ai-news::sources', updated);
      storageManager.setCustomData('ai-news::sourcesVersion', DEFAULT_SOURCES_VERSION);
      storageManager.write();
      stored = updated;
    }

    return stored;
  };

  const getFilterSelection = (): Record<string, boolean> => {
    const sel = storageManager.getCustomData('ai-news::filterSelection');
    return sel && typeof sel === 'object' && !Array.isArray(sel) ? sel : {};
  };

  const getCachedItems = (): NewsItem[] => {
    const cached = storageManager.getCustomData('ai-news::cache');
    return Array.isArray(cached) ? cached : [];
  };

  const getLastFetched = (): number => {
    const lf = storageManager.getCustomData('ai-news::lastFetched');
    return typeof lf === 'number' ? lf : 0;
  };

  const getHomeView = (): 'default' | 'compact' => {
    const view = storageManager.getCustomData('ai-news::homeView');
    return view === 'compact' ? 'compact' : 'default';
  };

  const getShowInHome = (): boolean => {
    const value = storageManager.getCustomData('ai-news::showInHome');
    // Default to true – show in home unless the user explicitly disabled it
    // noinspection RedundantConditionalExpressionJS
    return value === false ? false : true;
  };

  const getItemsPerPage = (): number => {
    const value = storageManager.getCustomData('ai-news::itemsPerPage');
    return typeof value === 'number' && value > 0 ? value : 20;
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

  // Extract Open Graph or Twitter image from page HTML
  const extractOgImage = (html: string): string => {
    if (!html) return '';
    const ogImageRegex = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i;
    const ogImageRegexAlt = /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i;
    const match = html.match(ogImageRegex) || html.match(ogImageRegexAlt);
    if (match) return match[1];

    const twitterImageRegex = /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i;
    const twitterImageRegexAlt = /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i;
    const matchTwitter = html.match(twitterImageRegex) || html.match(twitterImageRegexAlt);
    return matchTwitter ? matchTwitter[1] : '';
  };

  // Fetch article webpage and parse the Open Graph image
  const fetchOgImage = async (url: string): Promise<string> => {
    if (!url) return '';
    try {
      const res = await axios.get(url, {
        headers: BROWSER_HEADERS,
        timeout: 3000,
      });
      return extractOgImage(res.data);
    } catch (err: any) {
      console.warn(`AI News: Failed to scrape OG image for ${url}:`, err.message);
      return '';
    }
  };

  // Background feeds update logic
  const fetchAndCacheAllFeeds = async (force = false, onlySourceIds?: Set<string>) => {
    const sources = getSources();
    const currentCache = getCachedItems();
    const now = Date.now();

    // Index existing thumbnails to avoid re-scraping
    const existingThumbnails = new Map<string, string>();
    for (const item of currentCache) {
      if (item.thumbnail) {
        existingThumbnails.set(item.id, item.thumbnail);
      }
    }

    // Check rate limit (only fetch every 5 mins unless forced)
    if (!force && now - getLastFetched() < 5 * 60 * 1000) {
      console.log('AI News: Skipping background fetch (fetched recently)');
      return;
    }

    const enabledSources = sources.filter(s => s.enabled && (!onlySourceIds || onlySourceIds.has(s.id)));
    const totalSources = enabledSources.length;
    let completedSources = 0;

    const emitProgress = (sourceName: string) => {
      appManager.sendMessage('lynxhub-ai-news:fetch-progress', {
        sourceName,
        completed: completedSources,
        total: totalSources,
      });
    };

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
      if (!src.enabled || (onlySourceIds && !onlySourceIds.has(src.id))) {
        // Keep their cache in case they get re-enabled later
        continue;
      }

      // Emit progress: starting this source
      emitProgress(src.name);

      try {
        console.log(`AI News: Fetching source ${src.name} (${src.feedUrl})...`);
        const feed = await parser.parseURL(src.feedUrl);
        const parsedItems: NewsItem[] = [];

        const itemsToProcess = feed.items.slice(0, 40); // Cap at 40 items per source
        let scrapeCount = 0;
        for (const item of itemsToProcess) {
          let thumbnail = '';
          let snippet = item.contentSnippet || item.content || '';
          if (snippet.length > 250) {
            snippet = snippet.substring(0, 247) + '...';
          }

          const id = item.guid || (item as any).id || item.link || Math.random().toString(36).substring(7);

          if (existingThumbnails.has(id)) {
            thumbnail = existingThumbnails.get(id)!;
          } else if (src.type === 'youtube') {
            const videoId = getYoutubeVideoId(item);
            if (videoId) {
              thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }
          } else {
            thumbnail = extractImageFromHtml(item.content || '') || item.enclosure?.url || '';
            if (!thumbnail && item.link && scrapeCount < 10) {
              scrapeCount++;
              thumbnail = await fetchOgImage(item.link);
            }
          }

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
      } finally {
        completedSources++;
        // Emit progress: this source completed
        emitProgress(src.name);
      }
    }

    // Emit final done signal
    appManager.sendMessage('lynxhub-ai-news:fetch-progress', {
      sourceName: '',
      completed: totalSources,
      total: totalSources,
    });

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
      homeView: getHomeView(),
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
        homeView: getHomeView(),
        showInHome: getShowInHome(),
        filterSelection: getFilterSelection(),
        itemsPerPage: getItemsPerPage(),
      };
    });

    // Update items-per-page preference
    ipcMain.handle('lynxhub-ai-news:update-items-per-page', (_, count: number) => {
      storageManager.setCustomData('ai-news::itemsPerPage', count);
      storageManager.write();
      return getItemsPerPage();
    });

    // Save filter selection
    ipcMain.handle('lynxhub-ai-news:update-filter-selection', (_, selection: Record<string, boolean>) => {
      storageManager.setCustomData('ai-news::filterSelection', selection);
      storageManager.write();
      return getFilterSelection();
    });

    // Manually refresh all feeds
    ipcMain.handle('lynxhub-ai-news:refresh', async () => {
      await fetchAndCacheAllFeeds(true);
      return {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
        homeView: getHomeView(),
        showInHome: getShowInHome(),
        filterSelection: getFilterSelection(),
      };
    });

    // Toggle sources or enable/disable them
    ipcMain.handle('lynxhub-ai-news:update-sources', async (_, updatedSources: NewsSource[]) => {
      const previousSources = getSources();
      storageManager.setCustomData('ai-news::sources', updatedSources);
      storageManager.write();

      // Only re-fetch sources that are newly enabled and have no cached items yet
      const currentCache = getCachedItems();
      const cachedSourceIds = new Set(currentCache.map(item => item.sourceId));
      const previouslyEnabled = new Set(previousSources.filter(s => s.enabled).map(s => s.id));
      const newlyEnabled = updatedSources.filter(
        s => s.enabled && !previouslyEnabled.has(s.id) && !cachedSourceIds.has(s.id),
      );

      if (newlyEnabled.length > 0) {
        // Only fetch the sources that were just enabled and have no cache
        await fetchAndCacheAllFeeds(true, new Set(newlyEnabled.map(s => s.id)));
      }

      const newState = {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
        homeView: getHomeView(),
        showInHome: getShowInHome(),
        filterSelection: getFilterSelection(),
      };

      // Broadcast to all windows so the home page quick-view reacts immediately
      appManager.sendMessage('lynxhub-ai-news:state-updated', newState);

      return newState;
    });

    // Update homepage view preference
    ipcMain.handle('lynxhub-ai-news:update-home-view', (_, view: 'default' | 'compact') => {
      storageManager.setCustomData('ai-news::homeView', view);
      storageManager.write();

      // Broadcast update to renderer process
      appManager.sendMessage('lynxhub-ai-news:state-updated', {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
        homeView: view,
        showInHome: getShowInHome(),
        filterSelection: getFilterSelection(),
      });

      return {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
        homeView: view,
        showInHome: getShowInHome(),
        filterSelection: getFilterSelection(),
      };
    });

    // Update show-in-home preference
    ipcMain.handle('lynxhub-ai-news:update-show-in-home', (_, show: boolean) => {
      storageManager.setCustomData('ai-news::showInHome', show);
      storageManager.write();

      // Broadcast update to renderer process
      appManager.sendMessage('lynxhub-ai-news:state-updated', {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
        homeView: getHomeView(),
        showInHome: show,
        filterSelection: getFilterSelection(),
      });

      return {
        sources: getSources(),
        cache: getCachedItems(),
        lastFetched: getLastFetched(),
        homeView: getHomeView(),
        showInHome: show,
        filterSelection: getFilterSelection(),
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
          isDefault: false,
        };

        const updated = [...sources, newSource];
        storageManager.setCustomData('ai-news::sources', updated);
        storageManager.write();
        await fetchAndCacheAllFeeds(true);
        return {
          sources: getSources(),
          cache: getCachedItems(),
          lastFetched: getLastFetched(),
          filterSelection: getFilterSelection(),
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
          isDefault: false,
        };

        const updated = [...sources, newSource];
        storageManager.setCustomData('ai-news::sources', updated);
        storageManager.write();
        await fetchAndCacheAllFeeds(true);
        return {
          sources: getSources(),
          cache: getCachedItems(),
          lastFetched: getLastFetched(),
          filterSelection: getFilterSelection(),
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
      headers: BROWSER_HEADERS,
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
      headers: BROWSER_HEADERS,
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
          const checkRes = await axios.get(checkUrl, {
            headers: BROWSER_HEADERS,
            timeout: 3000,
          });
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
