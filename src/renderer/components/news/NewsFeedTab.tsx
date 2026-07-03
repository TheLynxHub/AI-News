import {Button, InputGroup, ListBox, ScrollShadow, Select, Tabs, TextField} from '@heroui/react';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
import {Search} from 'lucide-react';
import {Key, useMemo} from 'react';

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

  const selectedKeys = useMemo(() => {
    return Object.keys(selectedSourceIds).filter(id => selectedSourceIds[id]);
  }, [selectedSourceIds]);

  const handleSelectionChange = (keys: any) => {
    const keyArray = keys as Key[];
    const nextSelection: Record<string, boolean> = {};
    sources.forEach(src => {
      nextSelection[src.id] = keyArray.includes(src.id);
    });
    setSelectedSourceIds(nextSelection);
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

            <Select
              value={selectedKeys}
              selectionMode="multiple"
              className="flex-1 max-w-xs"
              placeholder="Select sources"
              onChange={handleSelectionChange}>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox selectionMode="multiple">
                  {sources.map(src => (
                    <ListBox.Item id={src.id} key={src.id} textValue={src.name}>
                      {src.name}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>

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
