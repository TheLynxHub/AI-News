import {Button, Description, Spinner} from '@heroui/react';
import Page from '@lynx/pages/Page';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {Earth, Plain2, Refresh, Settings} from '@solar-icons/react-perf/BoldDuotone';
import {Info} from 'lucide-react';
import {useEffect, useMemo, useRef, useState} from 'react';

import {extensionIpc} from '../ipc';
import ManageSourcesTab from './news/ManageSourcesTab';
import NewsFeedTab from './news/NewsFeedTab';
import RequestSourceTab from './news/RequestSourceTab';

const resolveSelections = (sourcesList: NewsSource[], storedSelection?: Record<string, boolean>) => {
  const selections: Record<string, boolean> = {};
  sourcesList.forEach(src => {
    selections[src.id] = storedSelection && src.id in storedSelection ? storedSelection[src.id] : true;
  });
  return selections;
};

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<'feed' | 'sources' | 'request'>('feed');
  const [sources, setSources] = useState<NewsSource[]>([]);
  const [cache, setCache] = useState<NewsItem[]>([]);
  const [lastFetched, setLastFetched] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [homeView, setHomeView] = useState<'default' | 'compact'>('default');

  // Fetch-progress indicator state
  const [fetchProgress, setFetchProgress] = useState<{
    sourceName: string;
    completed: number;
    total: number;
  } | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showInHome, setShowInHome] = useState(true);

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'website' | 'youtube'>('all');
  const [selectedSourceIds, setSelectedSourceIds] = useState<Record<string, boolean>>({});

  const handleUpdateFilterSelection = async (
    updater: Record<string, boolean> | ((prev: Record<string, boolean>) => Record<string, boolean>),
  ) => {
    setSelectedSourceIds(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      extensionIpc.lynxIpc.invoke('lynxhub-ai-news:update-filter-selection', next).catch(err => {
        console.error('Failed to update filter selection:', err);
      });
      return next;
    });
  };

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
          setSelectedSourceIds(resolveSelections(state.sources || [], state.filterSelection));
          setHomeView(state.homeView || 'default');
          setShowInHome(state.showInHome !== false);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to get news state:', err);
        setLoading(false);
      });

    // Listen for state updates in real-time
    const cleanupState = extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
        if (state.homeView) {
          setHomeView(state.homeView);
        }
        if (state.showInHome !== undefined) {
          setShowInHome(state.showInHome);
        }
        if (state.filterSelection) {
          setSelectedSourceIds(resolveSelections(state.sources || [], state.filterSelection));
        }
      }
    });

    // Listen for fetch-progress events
    const cleanupProgress = extensionIpc.lynxIpc.on(
      'lynxhub-ai-news:fetch-progress',
      (data: {sourceName: string; completed: number; total: number}) => {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        const isDone = data.total > 0 && data.completed >= data.total;
        setFetchProgress(data);
        if (isDone) {
          hideTimerRef.current = setTimeout(() => {
            setFetchProgress(null);
          }, 1500);
        }
      },
    );

    return () => {
      cleanupState();
      cleanupProgress();
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
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

  // Toggle all news sources enabled/disabled
  const handleToggleAllSources = async (enabled: boolean) => {
    const updated = sources.map(s => ({...s, enabled}));
    setSources(updated);

    try {
      const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:update-sources', updated);
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
      }
    } catch (err) {
      console.error('Failed to toggle all sources:', err);
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

  // Toggle show-in-home preference
  const handleToggleShowInHome = async (show: boolean) => {
    setShowInHome(show);
    try {
      await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:update-show-in-home', show);
    } catch (err) {
      console.error('Failed to update show-in-home preference:', err);
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

  // Only expose enabled sources to the feed tab's filter UI
  const enabledSources = useMemo(() => sources.filter(s => s.enabled), [sources]);

  // Filtered cache items
  const filteredItems = useMemo(() => {
    const enabledSourceIdSet = new Set(enabledSources.map(s => s.id));
    return cache.filter(item => {
      // 1. Exclude items from sources that are globally disabled
      if (!enabledSourceIdSet.has(item.sourceId)) return false;

      // 2. Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSnippet = item.snippet.toLowerCase().includes(query);
        const matchesSource = item.sourceName.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSnippet && !matchesSource) return false;
      }

      // 3. Type
      if (typeFilter !== 'all' && item.type !== typeFilter) {
        return false;
      }

      // 4. Per-feed source display filter (only active enabled sources)
      return selectedSourceIds[item.sourceId] !== false;
    });
  }, [cache, enabledSources, searchQuery, typeFilter, selectedSourceIds]);

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

        {/* Fetch-progress banner */}
        {fetchProgress && (
          <div className="flex flex-col shrink-0 animate-in fade-in slide-in-from-top-1 duration-300">
            <div className="flex items-center justify-between px-4 py-1.5 gap-3">
              <div className="flex items-center gap-1.5 min-w-0">
                {fetchProgress.completed < fetchProgress.total ? (
                  <span className="relative flex size-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                ) : (
                  <span className="relative flex size-2 shrink-0">
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                  </span>
                )}
                <span className="text-[10px] font-bold text-foreground/80 truncate">
                  {fetchProgress.completed < fetchProgress.total
                    ? fetchProgress.sourceName
                      ? `Fetching: ${fetchProgress.sourceName}`
                      : 'Fetching feeds...'
                    : 'Feeds updated'}
                </span>
              </div>
              <span className="text-[10px] font-extrabold text-accent shrink-0 tabular-nums">
                {fetchProgress.completed}/{fetchProgress.total}
              </span>
            </div>
            <div className="h-0.5 w-full bg-divider/30">
              <div
                style={{
                  width: fetchProgress.total > 0 ? `${(fetchProgress.completed / fetchProgress.total) * 100}%` : '0%',
                  transition: 'width 400ms ease-out',
                }}
                className={
                  'h-full ' +
                  (fetchProgress.completed >= fetchProgress.total
                    ? 'bg-green-500'
                    : 'bg-linear-to-r from-accent/70 via-accent to-accent/70')
                }
              />
            </div>
          </div>
        )}

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
                sources={enabledSources}
                typeFilter={typeFilter}
                searchQuery={searchQuery}
                onOpenLink={handleOpenLink}
                setTypeFilter={setTypeFilter}
                filteredItems={filteredItems}
                setSearchQuery={setSearchQuery}
                selectedSourceIds={selectedSourceIds}
                setSelectedSourceIds={handleUpdateFilterSelection}
              />
            ) : activeTab === 'sources' ? (
              <ManageSourcesTab
                sources={sources}
                homeView={homeView}
                showInHome={showInHome}
                onAddSource={handleAddSource}
                onToggleSource={handleToggleSource}
                onDeleteSource={handleDeleteSource}
                onToggleHomeView={handleToggleHomeView}
                onToggleAllSources={handleToggleAllSources}
                onToggleShowInHome={handleToggleShowInHome}
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
