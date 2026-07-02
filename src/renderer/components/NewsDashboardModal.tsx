import {Button, Checkbox, InputGroup, ScrollShadow, Spinner, Switch, TextField} from '@heroui/react';
import {SiGithub, SiYoutube} from '@icons-pack/react-simple-icons';
import TabModal from '@lynx/components/TabModal';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {
  Clock,
  ExternalLink,
  Globe,
  Info,
  Play,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  Trash2,
  Video,
  X,
} from 'lucide-react';
import {useEffect, useMemo, useState} from 'react';

import {extensionIpc} from '../ipc';

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

function formatTimeAgo(dateStr: string) {
  try {
    const date = new Date(dateStr);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  } catch {
    return '';
  }
}

const defaultSelections = (sourcesList: NewsSource[]) => {
  const initialSelections: Record<string, boolean> = {};
  sourcesList.forEach(src => {
    initialSelections[src.id] = true;
  });
  return initialSelections;
};

export default function NewsDashboardModal({isOpen, onOpenChange}: Props) {
  const [activeTab, setActiveTab] = useState<'feed' | 'sources' | 'request'>('feed');
  const [sources, setSources] = useState<NewsSource[]>([]);
  const [cache, setCache] = useState<NewsItem[]>([]);
  const [lastFetched, setLastFetched] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'website' | 'youtube'>('all');
  const [selectedSourceIds, setSelectedSourceIds] = useState<Record<string, boolean>>({});

  // Add source states
  const [addType, setAddType] = useState<'website' | 'youtube'>('website');
  const [addUrl, setAddUrl] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState('');
  const [addSuccess, setAddSuccess] = useState('');

  // Request source states
  const [reqName, setReqName] = useState('');
  const [reqUrl, setReqUrl] = useState('');
  const [reqReason, setReqReason] = useState('');

  // Fetch initial data
  useEffect(() => {
    if (!isOpen) return;

    setLoading(true);
    extensionIpc.lynxIpc
      .invoke('lynxhub-ai-news:get-state')
      .then((state: any) => {
        if (state) {
          setSources(state.sources || []);
          setCache(state.cache || []);
          setLastFetched(state.lastFetched || 0);
          setSelectedSourceIds(defaultSelections(state.sources || []));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to get news state:', err);
        setLoading(false);
      });

    // Listen for state updates in real-time
    const cleanup = extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
      }
    });

    return cleanup;
  }, [isOpen]);

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
  const handleAddSource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addUrl.trim()) return;

    setAdding(true);
    setAddError('');
    setAddSuccess('');

    try {
      const state = await extensionIpc.lynxIpc.invoke<any>('lynxhub-ai-news:add-custom-source', addType, addUrl);
      if (state) {
        setSources(state.sources || []);
        setCache(state.cache || []);
        setLastFetched(state.lastFetched || 0);
        setAddUrl('');
        setAddSuccess(`Successfully added custom ${addType}!`);
      }
    } catch (err: any) {
      setAddError(err.message || 'Failed to add custom source.');
    } finally {
      setAdding(false);
    }
  };

  // Submit GitHub Request Issue
  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqName.trim() || !reqUrl.trim()) return;

    const title = encodeURIComponent(`[AI News Source Request] ${reqName}`);
    const body = encodeURIComponent(
      `### Source Recommendation\n\n` +
        `**Name:** ${reqName}\n` +
        `**URL:** ${reqUrl}\n` +
        `**Reason/Why we should add it:**\n${reqReason || 'N/A'}\n\n` +
        `*Submitted via AI News Extension*`,
    );

    const issueUrl = `https://github.com/KindaBrazy/LynxHub-AI-News/issues/new?title=${title}&body=${body}`;
    extensionIpc.application.send.openUrlDefaultBrowser(issueUrl);

    // Reset form
    setReqName('');
    setReqUrl('');
    setReqReason('');
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
      if (selectedSourceIds[item.sourceId] === false) {
        return false;
      }

      return true;
    });
  }, [cache, searchQuery, typeFilter, selectedSourceIds]);

  return (
    <TabModal size="cover" isOpen={isOpen} dialogClassName="p-0" onOpenChange={onOpenChange}>
      <div className="flex flex-col h-full">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-divider shrink-0">
          <div className="flex flex-col">
            <h2 className="text-lg font-extrabold tracking-tight flex items-center gap-2 text-foreground">
              <Globe className="size-5 text-accent animate-pulse" /> AI News Hub
            </h2>
            <p className="text-xs text-muted-foreground">
              Your dashboard for artificial intelligence headlines, blogs, and channels.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onPress={handleRefresh}
              isDisabled={refreshing || loading}
              className="size-8 min-w-0 p-0 rounded-lg text-foreground hover:bg-content2">
              <RefreshCw className={`size-4 ${refreshing ? 'animate-spin text-accent' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              onPress={() => onOpenChange(false)}
              className="size-8 min-w-0 p-0 rounded-lg text-foreground hover:bg-content2">
              <X className="size-4" />
            </Button>
          </div>
        </div>

        {/* Modal Main Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="w-56 border-r border-divider bg-content1/20 p-4 flex flex-col gap-1.5 shrink-0">
            <Button
              onPress={() => setActiveTab('feed')}
              variant={activeTab === 'feed' ? 'primary' : 'ghost'}
              className="w-full justify-start gap-3 text-xs font-bold rounded-xl">
              <Globe className="size-4" /> News Feed
            </Button>
            <Button
              onPress={() => setActiveTab('sources')}
              variant={activeTab === 'sources' ? 'primary' : 'ghost'}
              className="w-full justify-start gap-3 text-xs font-bold rounded-xl">
              <Settings className="size-4" /> Manage Sources
            </Button>
            <Button
              onPress={() => setActiveTab('request')}
              variant={activeTab === 'request' ? 'primary' : 'ghost'}
              className="w-full justify-start gap-3 text-xs font-bold rounded-xl">
              <Send className="size-4" /> Request Source
            </Button>

            <div
              className={
                'mt-auto p-3 bg-content2/30 border border-divider ' + 'rounded-2xl flex flex-col gap-1 select-none'
              }>
              <span
                className={
                  'text-[9px] font-extrabold uppercase text-muted-foreground ' +
                  'tracking-wider flex items-center gap-1'
                }>
                <Info className="size-3" /> Info
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5">
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
                  <span className="text-xs text-muted-foreground">Loading AI News...</span>
                </div>
              </div>
            ) : activeTab === 'feed' ? (
              /* FEED TAB */
              <div className="flex-1 flex flex-col min-w-0 overflow-hidden p-6 gap-4">
                {/* Search and Quick Filters */}
                <div className="flex flex-col gap-3 shrink-0">
                  <div className="flex gap-3">
                    <TextField
                      className="flex-1"
                      variant="secondary"
                      value={searchQuery}
                      onChange={setSearchQuery}
                      fullWidth>
                      <InputGroup>
                        <InputGroup.Prefix>
                          <Search className="size-4 text-muted-foreground" />
                        </InputGroup.Prefix>
                        <InputGroup.Input placeholder="Search news feeds..." />
                      </InputGroup>
                    </TextField>

                    <div className="flex bg-content2 p-0.5 rounded-xl border border-divider shrink-0">
                      <Button
                        onPress={() => setTypeFilter('all')}
                        variant={typeFilter === 'all' ? 'primary' : 'ghost'}
                        className="text-[10px] font-bold py-1 px-3 h-8 min-w-0 rounded-lg">
                        All
                      </Button>
                      <Button
                        onPress={() => setTypeFilter('website')}
                        variant={typeFilter === 'website' ? 'primary' : 'ghost'}
                        className="text-[10px] font-bold py-1 px-3 h-8 min-w-0 rounded-lg">
                        Websites
                      </Button>
                      <Button
                        onPress={() => setTypeFilter('youtube')}
                        variant={typeFilter === 'youtube' ? 'primary' : 'ghost'}
                        className="text-[10px] font-bold py-1 px-3 h-8 min-w-0 rounded-lg">
                        YouTube
                      </Button>
                    </div>
                  </div>

                  {/* Individual Source Filters */}
                  {sources.length > 0 && (
                    <div
                      className={
                        'flex flex-wrap items-center gap-x-4 gap-y-1.5 px-2 py-1.5 ' +
                        'bg-content1 border-b border-divider rounded-xl'
                      }>
                      <span
                        className={
                          'text-[10px] font-extrabold uppercase ' + 'text-muted-foreground tracking-wider select-none'
                        }>
                        Filter Sources:
                      </span>
                      {sources.map(src => (
                        <Checkbox
                          key={src.id}
                          isSelected={selectedSourceIds[src.id] !== false}
                          onChange={selected => setSelectedSourceIds(prev => ({...prev, [src.id]: selected}))}>
                          <Checkbox.Content className="flex items-center gap-1.5">
                            <Checkbox.Control>
                              <Checkbox.Indicator />
                            </Checkbox.Control>
                            <span className="text-xs text-foreground/80 select-none">{src.name}</span>
                          </Checkbox.Content>
                        </Checkbox>
                      ))}
                    </div>
                  )}
                </div>

                {/* Feeds Timeline list */}
                <ScrollShadow className="flex-1 pr-2 scrollbar-hide">
                  {filteredItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center select-none">
                      <Globe className="size-12 text-muted-foreground/30 mb-2" />
                      <h3 className="text-sm font-extrabold text-foreground/80">No stories found</h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                        Try modifying search keywords or active filters.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 pb-4">
                      {filteredItems.map(item => (
                        <div
                          className={
                            'group bg-content1 hover:bg-content2 border border-divider ' +
                            'hover:border-accent rounded-2xl flex p-4 transition-all ' +
                            'duration-200 relative overflow-hidden cursor-pointer ' +
                            'shadow-sm hover:shadow-md'
                          }
                          key={item.id}
                          onClick={() => handleOpenLink(item.link)}>
                          {item.thumbnail ? (
                            <div
                              className={
                                'w-28 h-20 relative shrink-0 overflow-hidden bg-content2 ' +
                                'rounded-xl mr-4 self-center'
                              }>
                              <img
                                loading="lazy"
                                alt={item.title}
                                src={item.thumbnail}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                              {item.type === 'youtube' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                  <div
                                    className={
                                      'size-8 rounded-full bg-red-600 flex ' +
                                      'items-center justify-center text-white shadow-md'
                                    }>
                                    <Play className="size-4 ml-0.5" />
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div
                              className={
                                'w-28 h-20 bg-linear-to-br from-accent/10 to-secondary/10 ' +
                                'rounded-xl shrink-0 flex items-center justify-center mr-4 ' +
                                'self-center border border-divider'
                              }>
                              {item.type === 'youtube' ? (
                                <SiYoutube className="size-7 text-red-600" />
                              ) : (
                                <Globe className="size-7 text-accent" />
                              )}
                            </div>
                          )}

                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              <div className="flex items-center justify-between gap-x-2">
                                <span
                                  className={
                                    'text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 ' +
                                    'rounded bg-accent/10 text-accent select-none ' +
                                    'max-w-38.75 truncate'
                                  }>
                                  {item.sourceName}
                                </span>
                                {item.type === 'youtube' ? (
                                  <SiYoutube className="size-4 text-red-600 shrink-0" />
                                ) : (
                                  <Globe className="size-3.5 text-accent shrink-0" />
                                )}
                              </div>
                              <h3
                                className={
                                  'text-xs font-extrabold text-foreground mt-1.5 leading-snug ' +
                                  'line-clamp-2 hover:text-accent transition-colors duration-200'
                                }>
                                {item.title}
                              </h3>
                              <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1">{item.snippet}</p>
                            </div>

                            <div
                              className={
                                'flex items-center justify-between text-[10px] text-muted-foreground ' +
                                'mt-3 pt-2 border-t border-divider select-none'
                              }>
                              <span className="flex items-center gap-1.5 font-bold">
                                <Clock className="size-3" /> {formatTimeAgo(item.isoDate)}
                              </span>
                              <span
                                className={
                                  'text-[9px] font-bold text-accent group-hover:underline ' + 'flex items-center gap-1'
                                }>
                                View Content <ExternalLink className="size-2.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollShadow>
              </div>
            ) : activeTab === 'sources' ? (
              /* SOURCES TAB */
              <div className="flex-1 flex overflow-hidden p-6 gap-6">
                {/* Add Custom Source form */}
                <div className={'w-1/2 flex flex-col bg-content1 border border-divider ' + 'p-5 rounded-2xl shrink-0'}>
                  <h3 className="text-sm font-extrabold text-foreground mb-1">Add Feed Source</h3>
                  <p className="text-[11px] text-muted-foreground mb-4">
                    Type a website URL to discover its feed, or enter a YouTube channel link.
                  </p>

                  <form onSubmit={handleAddSource} className="flex flex-col gap-4">
                    <div className="flex bg-content2 p-0.5 rounded-xl border border-divider w-full shrink-0">
                      <Button
                        type="button"
                        onPress={() => setAddType('website')}
                        variant={addType === 'website' ? 'primary' : 'ghost'}
                        className="flex-1 text-[10px] font-bold py-1.5 rounded-lg">
                        <Globe className="size-3 mr-1" /> Website Blog
                      </Button>
                      <Button
                        type="button"
                        onPress={() => setAddType('youtube')}
                        variant={addType === 'youtube' ? 'primary' : 'ghost'}
                        className="flex-1 text-[10px] font-bold py-1.5 rounded-lg">
                        <Video className="size-3 mr-1" /> YouTube Channel
                      </Button>
                    </div>

                    <TextField value={addUrl} onChange={setAddUrl} fullWidth>
                      <InputGroup>
                        <InputGroup.Input
                          placeholder={
                            addType === 'website' ? 'e.g. venturebeat.com/category/ai' : 'e.g. @mreflow or channel link'
                          }
                          disabled={adding}
                        />
                      </InputGroup>
                    </TextField>

                    {addError && <p className="text-[11px] text-danger font-bold">{addError}</p>}
                    {addSuccess && <p className="text-[11px] text-success font-bold">{addSuccess}</p>}

                    <Button
                      type="submit"
                      variant="primary"
                      isDisabled={adding || !addUrl.trim()}
                      className="w-full text-xs font-bold rounded-xl mt-2 justify-center">
                      {adding ? (
                        <>
                          <Spinner size="sm" color="current" className="mr-2" /> Saving source...
                        </>
                      ) : (
                        <>
                          <Plus className="size-4 mr-2" /> Add News Source
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Sources List panel */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <h3 className="text-sm font-extrabold text-foreground mb-2 shrink-0">
                    Active Sources ({sources.length})
                  </h3>
                  <ScrollShadow className="flex-1 pr-2 scrollbar-hide">
                    <div className="flex flex-col gap-3">
                      {sources.map(src => (
                        <div
                          className={
                            'bg-content1 border border-divider p-3 ' +
                            'rounded-2xl flex items-center justify-between gap-4'
                          }
                          key={src.id}>
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="size-9 rounded-full bg-content2 flex items-center justify-center shrink-0">
                              {src.type === 'youtube' ? (
                                <SiYoutube className="size-4.5 text-red-600" />
                              ) : (
                                <Globe className="size-4 text-accent" />
                              )}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <h4 className="text-xs font-bold text-foreground truncate max-w-50">{src.name}</h4>
                              <span className="text-[10px] text-muted-foreground truncate max-w-60">{src.url}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            {/* Switch to enable/disable */}
                            <Switch isSelected={src.enabled} onChange={val => handleToggleSource(src.id, val)}>
                              <Switch.Content>
                                <Switch.Control>
                                  <Switch.Thumb />
                                </Switch.Control>
                              </Switch.Content>
                            </Switch>

                            {/* Delete button (only show for custom sources) */}
                            {src.id.startsWith('website-') && (
                              <Button
                                variant="ghost"
                                onPress={() => handleDeleteSource(src.id)}
                                className="size-7 min-w-0 p-0 text-danger rounded-lg hover:bg-danger/10 border-0">
                                <Trash2 className="size-3.5" />
                              </Button>
                            )}
                            {src.id.startsWith('youtube-') &&
                              src.id !== 'youtube-theaisearch' &&
                              src.id !== 'youtube-mreflow' && (
                                <Button
                                  variant="ghost"
                                  onPress={() => handleDeleteSource(src.id)}
                                  className="size-7 min-w-0 p-0 text-danger rounded-lg hover:bg-danger/10 border-0">
                                  <Trash2 className="size-3.5" />
                                </Button>
                              )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollShadow>
                </div>
              </div>
            ) : (
              /* REQUEST TAB */
              <div className="flex-1 flex flex-col p-6 overflow-hidden max-w-xl mx-auto justify-center">
                <div className="bg-content1 border border-divider p-6 rounded-2xl flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Send className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-extrabold text-foreground">Recommend an AI Source</h3>
                      <p className="text-[11px] text-muted-foreground">
                        Recommend a website blog or YouTube channel to be added as a default news source.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitRequest} className="flex flex-col gap-4 mt-4">
                    <TextField value={reqName} onChange={setReqName} fullWidth>
                      <InputGroup>
                        <InputGroup.Input placeholder="Source Name (e.g. AI News Daily)" />
                      </InputGroup>
                    </TextField>

                    <TextField value={reqUrl} onChange={setReqUrl} fullWidth>
                      <InputGroup>
                        <InputGroup.Input placeholder="Website URL or YouTube channel handle" />
                      </InputGroup>
                    </TextField>

                    <TextField value={reqReason} onChange={setReqReason} fullWidth>
                      <InputGroup>
                        <InputGroup.Input placeholder="Why should this be added? (Brief description)" />
                      </InputGroup>
                    </TextField>

                    <div
                      className={
                        'p-3 bg-accent/5 border border-accent/15 rounded-xl ' +
                        'flex items-start gap-2.5 select-none my-1'
                      }>
                      <SiGithub className="size-4 text-foreground shrink-0 mt-0.5" />
                      <p className="text-[10px] text-muted-foreground leading-normal">
                        Submitting will redirect you to the repository's new issue page on GitHub with pre-filled
                        details. No credentials or login required.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      isDisabled={!reqName.trim() || !reqUrl.trim()}
                      className="w-full text-xs font-bold rounded-xl mt-1 justify-center">
                      <Send className="size-4 mr-2" /> Open Request on GitHub
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </TabModal>
  );
}
