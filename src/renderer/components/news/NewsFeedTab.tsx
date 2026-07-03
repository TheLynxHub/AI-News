import {Checkbox, InputGroup, ScrollShadow, Tabs, TextField} from '@heroui/react';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
import {Search} from 'lucide-react';
import {Key} from 'react';

import NewsCard from './NewsCard';

interface NewsFeedTabProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  typeFilter: 'all' | 'website' | 'youtube';
  setTypeFilter: (filter: 'all' | 'website' | 'youtube') => void;
  sources: NewsSource[];
  selectedSourceIds: Record<string, boolean>;
  setSelectedSourceIds: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
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
          <div
            className={
              'flex flex-wrap items-center gap-x-4 gap-y-1.5 px-2 py-2 ' +
              'bg-surface-secondary border-b border-border rounded-xl'
            }>
            <span className={'text-[10px] font-extrabold uppercase ' + 'text-semi-muted tracking-wider select-none'}>
              Filter Sources:
            </span>
            {sources.map(src => (
              <Checkbox
                key={src.id}
                isSelected={selectedSourceIds[src.id]}
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
