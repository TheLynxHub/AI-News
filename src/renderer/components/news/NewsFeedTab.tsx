import {
  Autocomplete,
  Button,
  EmptyState,
  InputGroup,
  Key,
  Label,
  ListBox,
  Pagination,
  ScrollShadow,
  SearchField,
  Select,
  Tabs,
  Tag,
  TagGroup,
  TextField,
  useFilter,
} from '@heroui/react';
import {NewsItem, NewsSource} from '@lynx_extension/cross/types';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
import {Search} from 'lucide-react';
import {useEffect, useMemo, useState} from 'react';

import NewsCard from './NewsCard';

const PER_PAGE_OPTIONS = [10, 20, 30, 50] as const;
type PerPageOption = (typeof PER_PAGE_OPTIONS)[number];

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
  itemsPerPage: number;
  onItemsPerPageChange: (count: number) => void;
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
  itemsPerPage,
  onItemsPerPageChange,
}: NewsFeedTabProps) {
  const [currentPage, setCurrentPage] = useState(1);

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

  // Reset to page 1 whenever filters or items change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredItems.length, searchQuery, typeFilter, selectedSourceIds]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));

  // Clamp currentPage to valid range
  const safePage = Math.min(currentPage, totalPages);

  const pagedItems = useMemo(
    () => filteredItems.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage),
    [filteredItems, safePage, itemsPerPage],
  );

  const startItem = filteredItems.length === 0 ? 0 : (safePage - 1) * itemsPerPage + 1;
  const endItem = Math.min(safePage * itemsPerPage, filteredItems.length);

  const handlePerPageChange = (key: Key | null) => {
    if (!key) return;
    const count = Number(key) as PerPageOption;
    if (PER_PAGE_OPTIONS.includes(count)) {
      onItemsPerPageChange(count);
      setCurrentPage(1);
    }
  };

  // Build page numbers with ellipsis
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    if (totalPages <= 7) {
      return Array.from({length: totalPages}, (_, i) => i + 1);
    }
    const pages: (number | 'ellipsis')[] = [1];
    if (safePage > 3) pages.push('ellipsis');
    const start = Math.max(2, safePage - 1);
    const end = Math.min(totalPages - 1, safePage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (safePage < totalPages - 2) pages.push('ellipsis');
    pages.push(totalPages);
    return pages;
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
            {pagedItems.map(item => (
              <NewsCard item={item} key={item.id} onOpenLink={onOpenLink} />
            ))}
          </div>
        )}
      </ScrollShadow>

      {/* Pagination footer */}
      {filteredItems.length > 0 && (
        <div className="shrink-0 flex items-center justify-between gap-4 pt-2 border-t border-border">
          {/* Summary + per-page select */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted tabular-nums whitespace-nowrap">
              {startItem}–{endItem} of {filteredItems.length}
            </span>
            <Select
              className="w-27.5"
              variant="secondary"
              aria-label="Items per page"
              value={String(itemsPerPage)}
              onChange={handlePerPageChange}>
              <Label className="sr-only">Items per page</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {PER_PAGE_OPTIONS.map(n => (
                    <ListBox.Item id={String(n)} key={String(n)} textValue={`${n} / page`}>
                      {n} / page
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Pagination controls */}
          <Pagination size="sm" className="size-fit">
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous isDisabled={safePage === 1} onPress={() => setCurrentPage(p => p - 1)}>
                  <Pagination.PreviousIcon />
                  <span>Prev</span>
                </Pagination.Previous>
              </Pagination.Item>
              {getPageNumbers().map((p, i) =>
                p === 'ellipsis' ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={p}>
                    <Pagination.Link isActive={p === safePage} onPress={() => setCurrentPage(p)}>
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ),
              )}
              <Pagination.Item>
                <Pagination.Next isDisabled={safePage === totalPages} onPress={() => setCurrentPage(p => p + 1)}>
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>

          <div />
        </div>
      )}
    </div>
  );
}
