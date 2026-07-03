import {
  Autocomplete,
  Button,
  EmptyState,
  InputGroup,
  Key,
  ListBox,
  ScrollShadow,
  SearchField,
  Tabs,
  Tag,
  TagGroup,
  TextField,
  useFilter,
} from '@heroui/react';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
import {Search} from 'lucide-react';
import {useMemo} from 'react';

import NewsCard from './NewsCard';

interface NewsFeedTabProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  typeFilter: 'all' | 'website' | 'youtube';
  setTypeFilter: (filter: 'all' | 'website' | 'youtube') => void;
  sources: NewsSource[];
  selectedSourceIds: Record<string, boolean>;
  setSelectedSourceIds: (
    updater: Record<string, boolean> | ((prev: Record<string, boolean>) => Record<string, boolean>),
  ) => void;
  filteredItems: NewsItem[];
  onOpenLink: (url: string) => void;
}

export default function NewsFeedTab({
  searchQuery,
  setSearchQuery,
  typeFilter,
  setTypeFilter,
  sources,
  selectedSourceIds,
  setSelectedSourceIds,
  filteredItems,
  onOpenLink,
}: NewsFeedTabProps) {
  const handleTabChange = (key: Key) => {
    setTypeFilter(key as 'all' | 'website' | 'youtube');
  };

  const {contains} = useFilter({sensitivity: 'base'});

  const selectedKeys = useMemo(() => {
    return Object.keys(selectedSourceIds).filter(id => selectedSourceIds[id]);
  }, [selectedSourceIds]);

  const handleSelectionChange = (keys: Key | Key[] | null) => {
    const keyArray = (Array.isArray(keys) ? keys : keys ? [keys] : []) as string[];
    const nextSelection: Record<string, boolean> = {};
    sources.forEach(src => {
      nextSelection[src.id] = keyArray.includes(src.id);
    });
    setSelectedSourceIds(nextSelection);
  };

  const handleRemoveTag = (keys: Set<Key>) => {
    setSelectedSourceIds(prev => {
      const next = {...prev};
      keys.forEach(k => {
        next[k as string] = false;
      });
      return next;
    });
  };

  const handleEnableAll = () => {
    const nextSelection: Record<string, boolean> = {};
    sources.forEach(src => {
      nextSelection[src.id] = true;
    });
    setSelectedSourceIds(nextSelection);
  };

  const handleDisableAll = () => {
    const nextSelection: Record<string, boolean> = {};
    sources.forEach(src => {
      nextSelection[src.id] = false;
    });
    setSelectedSourceIds(nextSelection);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden p-6 gap-4">
      {/* Search and Quick Filters */}
      <div className="flex flex-col gap-3 shrink-0">
        <div className="flex gap-3 items-center">
          <TextField className="flex-1" value={searchQuery} onChange={setSearchQuery} fullWidth>
            <InputGroup>
              <InputGroup.Prefix>
                <Search className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="Search news feeds..." />
            </InputGroup>
          </TextField>

          {/* HeroUI v3 Tabs for type selection */}
          <Tabs selectedKey={typeFilter} aria-label="News type filter" onSelectionChange={handleTabChange}>
            <Tabs.ListContainer>
              <Tabs.List>
                <Tabs.Tab id="all">
                  All
                  <Tabs.Indicator />
                </Tabs.Tab>
                <Tabs.Tab id="website">
                  Websites
                  <Tabs.Indicator />
                </Tabs.Tab>
                <Tabs.Tab id="youtube">
                  YouTube
                  <Tabs.Indicator />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
          </Tabs>
        </div>

        {/* Individual Source Filters */}
        {sources.length > 0 && (
          <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
            <span className="text-[10px] font-extrabold uppercase text-semi-muted tracking-wider select-none shrink-0">
              Filter Sources:
            </span>

            <Autocomplete
              value={selectedKeys}
              selectionMode="multiple"
              placeholder="Filter sources..."
              onChange={handleSelectionChange}
              fullWidth>
              <Autocomplete.Trigger>
                <Autocomplete.Value>
                  {({defaultChildren, isPlaceholder, state}: any) => {
                    if (isPlaceholder || state.selectedItems.length === 0) return defaultChildren;
                    return (
                      <TagGroup size="sm" onRemove={handleRemoveTag}>
                        <TagGroup.List>
                          {(state.selectedItems as any[]).map((item: any) => (
                            <Tag id={item.key} key={item.key}>
                              {sources.find(s => s.id === item.key)?.name ?? item.key}
                            </Tag>
                          ))}
                        </TagGroup.List>
                      </TagGroup>
                    );
                  }}
                </Autocomplete.Value>
                <Autocomplete.ClearButton />
                <Autocomplete.Indicator />
              </Autocomplete.Trigger>
              <Autocomplete.Popover>
                <Autocomplete.Filter filter={contains}>
                  <SearchField variant="secondary" name="source-search" autoFocus>
                    <SearchField.Group>
                      <SearchField.SearchIcon />
                      <SearchField.Input placeholder="Search sources..." />
                      <SearchField.ClearButton />
                    </SearchField.Group>
                  </SearchField>
                  <ListBox selectionMode="multiple" renderEmptyState={() => <EmptyState>No sources found</EmptyState>}>
                    {sources.map(src => (
                      <ListBox.Item id={src.id} key={src.id} textValue={src.name}>
                        {src.name}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Autocomplete.Filter>
              </Autocomplete.Popover>
            </Autocomplete>

            <div className="flex items-center gap-1.5 shrink-0 ml-auto">
              <Button size="sm" variant="ghost" onPress={handleEnableAll}>
                All On
              </Button>
              <Button size="sm" variant="ghost" onPress={handleDisableAll}>
                All Off
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Feeds Timeline list */}
      <ScrollShadow className="flex-1 pr-2">
        {filteredItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center select-none">
            <Earth className="size-12 text-muted/30 mb-2" />
            <h3 className="text-sm font-extrabold text-foreground/80">No stories found</h3>
            <p className="text-xs text-muted mt-1 max-w-sm">Try modifying search keywords or active filters.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 pb-4">
            {filteredItems.map(item => (
              <NewsCard item={item} key={item.id} onOpenLink={onOpenLink} />
            ))}
          </div>
        )}
      </ScrollShadow>
    </div>
  );
}
