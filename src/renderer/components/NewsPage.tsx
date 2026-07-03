import {Button, Description, Spinner} from '@heroui/react';
import Page from '@lynx/pages/Page';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {Earth, Plain2, Refresh, Settings} from '@solar-icons/react-perf/BoldDuotone';
import {Info} from 'lucide-react';
import {useEffect, useMemo, useState} from 'react';

import {extensionIpc} from '../ipc';
import ManageSourcesTab from './news/ManageSourcesTab';
import NewsFeedTab from './news/NewsFeedTab';
import RequestSourceTab from './news/RequestSourceTab';

const defaultSelections = (sourcesList: NewsSource[]) => {
  const initialSelections: Record<string, boolean> = {};
  sourcesList.forEach(src => {
    initialSelections[src.id] = true;
  });
  return initialSelections;
};

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<'feed' | 'sources' | 'request'>('feed');
  const [sources, setSources] = useState<NewsSource[]>([]);
  const [cache, setCache] = useState<NewsItem[]>([]);
  const [lastFetched, setLastFetched] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [homeView, setHomeView] = useState<'default' | 'compact'>('default');

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'website' | 'youtube'>('all');
  const [selectedSourceIds, setSelectedSourceIds] = useState<Record<string, boolean>>({});

  // Fetch initial data
  useEffect(() => {
    setLoading(true);
    extensionIpc.lynxIpc
      .invoke('lynxhub-ai-news:get-state')
      .then((state: any) => {
        if (state) {
          setSources(state.sources || []);
          setCache(state.cache || []);
          setLastFetched(state.lastFetched || 0);
          setSelectedSourceIds(defaultSelections(state.sources || []));
          setHomeView(state.homeView || 'default');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to get news state:', err);
        setLoading(false);
      });

    // Listen for state updates in real-time
    return extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
        if (state.homeView) {
          setHomeView(state.homeView);
        }
      }
    });
  }, []);

  // Handle feed refresh
  const handleRefresh = async () => {
    if (refreshing) return;
    setRefreshing(true);
    try {
      const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:refresh');
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
      }
    } catch (err) {
      console.error('Failed to refresh feeds:', err);
    } finally {
      setRefreshing(false);
    }
  };

  // Toggle news source enabled/disabled
  const handleToggleSource = async (sourceId: string, enabled: boolean) => {
    const updated = sources.map(s => (s.id === sourceId ? {...s, enabled} : s));
    setSources(updated);

    try {
      const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:update-sources', updated);
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
      }
    } catch (err) {
      console.error('Failed to toggle source:', err);
    }
  };

  // Toggle home view layout preference
  const handleToggleHomeView = async (view: 'default' | 'compact') => {
    setHomeView(view);
    try {
      const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:update-home-view', view);
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
        setHomeView(state.homeView || 'default');
      }
    } catch (err) {
      console.error('Failed to update home view preference:', err);
    }
  };

  // Delete news source
  const handleDeleteSource = async (sourceId: string) => {
    const updated = sources.filter(s => s.id !== sourceId);
    setSources(updated);

    try {
      const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:update-sources', updated);
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
      }
    } catch (err) {
      console.error('Failed to delete source:', err);
    }
  };

  // Add custom source
  const handleAddSource = async (type: 'website' | 'youtube', url: string) => {
    const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:add-custom-source', type, url);
    if (state) {
      setSources(state.sources || []);
      setCache(state.cache || []);
      setLastFetched(state.lastFetched || 0);
    }
  };

  const handleOpenLink = (url: string) => {
    if (url) {
      extensionIpc.application.send.openUrlDefaultBrowser(url);
    }
  };

  // Filtered cache items
  const filteredItems = useMemo(() => {
    return cache.filter(item => {
      // 1. Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSnippet = item.snippet.toLowerCase().includes(query);
        const matchesSource = item.sourceName.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSnippet && !matchesSource) return false;
      }

      // 2. Type
      if (typeFilter !== 'all' && item.type !== typeFilter) {
        return false;
      }

      // 3. Source enabled list filter
      return selectedSourceIds[item.sourceId];
    });
  }, [cache, searchQuery, typeFilter, selectedSourceIds]);

  return (
    <Page className="flex overflow-hidden p-5">
      <div className="flex flex-col bg-surface-secondary rounded-3xl overflow-hidden w-full h-full">
        {/* Page Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border shrink-0">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight flex items-center gap-2 text-foreground">
              <Plain2 className="size-5 text-accent animate-pulse" /> AI News Hub
            </h2>
            <Description className="text-sm">
              Your dashboard for artificial intelligence headlines, blogs, and channels.
            </Description>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onPress={handleRefresh} isDisabled={refreshing || loading} isIconOnly>
              <Refresh className={`size-4 ${refreshing ? 'animate-spin text-accent' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Main Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="w-56 border-r border-border bg-surface/20 p-4 flex flex-col gap-1.5 shrink-0">
            <Button
              onPress={() => setActiveTab('feed')}
              className="w-full text-xs font-bold justify-start"
              variant={activeTab === 'feed' ? 'primary' : 'ghost'}
              fullWidth>
              <Earth className="size-4" /> News Feed
            </Button>
            <Button
              onPress={() => setActiveTab('sources')}
              className="w-full text-xs font-bold justify-start"
              variant={activeTab === 'sources' ? 'primary' : 'ghost'}
              fullWidth>
              <Settings className="size-4" /> Manage Sources
            </Button>
            <Button
              onPress={() => setActiveTab('request')}
              className="w-full text-xs font-bold justify-start"
              variant={activeTab === 'request' ? 'primary' : 'ghost'}
              fullWidth>
              <Plain2 className="size-4" /> Request Source
            </Button>

            <div className={'mt-auto p-3 bg-surface rounded-2xl flex flex-col gap-1 select-none'}>
              <span
                className={
                  'text-[9px] font-extrabold uppercase text-muted ' + 'tracking-wider flex items-center gap-1'
                }>
                <Info className="size-3" /> Info
              </span>
              <span className="text-[10px] text-muted mt-0.5">
                Last updated: {lastFetched > 0 ? new Date(lastFetched).toLocaleTimeString() : 'Never'}
              </span>
            </div>
          </div>

          {/* Tab Contents */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {loading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="lg" />
                  <span className="text-xs text-muted">Loading AI News...</span>
                </div>
              </div>
            ) : activeTab === 'feed' ? (
              <NewsFeedTab
                sources={sources}
                typeFilter={typeFilter}
                searchQuery={searchQuery}
                onOpenLink={handleOpenLink}
                setTypeFilter={setTypeFilter}
                filteredItems={filteredItems}
                setSearchQuery={setSearchQuery}
                selectedSourceIds={selectedSourceIds}
                setSelectedSourceIds={setSelectedSourceIds}
              />
            ) : activeTab === 'sources' ? (
              <ManageSourcesTab
                sources={sources}
                homeView={homeView}
                onAddSource={handleAddSource}
                onToggleSource={handleToggleSource}
                onDeleteSource={handleDeleteSource}
                onToggleHomeView={handleToggleHomeView}
              />
            ) : (
              <RequestSourceTab />
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
