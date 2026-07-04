import {ScrollShadow} from '@heroui/react';
import {SiYoutube} from '@icons-pack/react-simple-icons';
import {Play} from '@solar-icons/react-perf/Bold';
import {ClockCircle, DocumentText, Earth, Plain2} from '@solar-icons/react-perf/BoldDuotone';
import {useEffect, useRef, useState} from 'react';

import {NewsItem} from '../../../cross/types';
import {extensionIpc} from '../../ipc';

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

export default function Compact() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Fetch-progress indicator state
  const [fetchProgress, setFetchProgress] = useState<{
    sourceName: string;
    completed: number;
    total: number;
    visible: boolean;
  } | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({isDragging: false, startX: 0, scrollLeft: 0, moved: false});

  useEffect(() => {
    // Fetch initial state
    extensionIpc.lynxIpc
      .invoke('lynxhub-ai-news:get-state')
      .then((state: any) => {
        if (state && Array.isArray(state.cache)) {
          const enabledIds = new Set<string>(
            Array.isArray(state.sources) ? state.sources.filter((s: any) => s.enabled).map((s: any) => s.id) : [],
          );
          setItems(state.cache.filter((item: any) => enabledIds.has(item.sourceId)).slice(0, 5));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load Quick View state:', err);
        setLoading(false);
      });

    // Listen for updates
    const cleanupState = extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state && Array.isArray(state.cache)) {
        const enabledIds = new Set<string>(
          Array.isArray(state.sources) ? state.sources.filter((s: any) => s.enabled).map((s: any) => s.id) : [],
        );
        setItems(state.cache.filter((item: any) => enabledIds.has(item.sourceId)).slice(0, 5));
      }
    });

    const cleanupProgress = extensionIpc.lynxIpc.on(
      'lynxhub-ai-news:fetch-progress',
      (data: {sourceName: string; completed: number; total: number}) => {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        const isDone = data.total > 0 && data.completed >= data.total;
        setFetchProgress({...data, visible: true});
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    dragState.current = {isDragging: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: false};
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !dragState.current.isDragging) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 5) dragState.current.moved = true;
    el.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const handlePointerUp = () => {
    dragState.current.isDragging = false;
  };

  const handlePointerLeave = () => {
    dragState.current.isDragging = false;
  };

  const handleCardClick = (link: string) => {
    if (dragState.current.moved) return; // suppress click after drag
    if (link) extensionIpc.application.send.openUrlDefaultBrowser(link);
  };

  if (loading) {
    return (
      <div className="w-full px-2 py-1.5 flex gap-3 overflow-x-auto scrollbar-hide">
        {[1, 2, 3].map(n => (
          <div key={n} className="w-64 min-w-[256px] h-32 rounded-2xl bg-surface-secondary animate-pulse" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    // If a fetch is active, show a skeleton strip with the progress indicator
    if (!fetchProgress) return null;
    return (
      <div className="w-full flex flex-col gap-1.5 px-2">
        {/* Progress banner */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface-secondary">
          <div className="flex items-center justify-between px-3 py-1 gap-3">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="relative flex size-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              <span className="text-[9px] font-bold text-foreground/70 truncate">
                {fetchProgress.sourceName ? `Fetching: ${fetchProgress.sourceName}` : 'Fetching feeds...'}
              </span>
            </div>
            <span className="text-[9px] font-extrabold text-accent shrink-0 tabular-nums">
              {fetchProgress.completed}/{fetchProgress.total}
            </span>
          </div>
          <div className="h-0.5 w-full bg-divider/30">
            <div
              style={{
                width: fetchProgress.total > 0 ? `${(fetchProgress.completed / fetchProgress.total) * 100}%` : '0%',
                transition: 'width 400ms ease-out',
              }}
              className="h-full bg-linear-to-r from-accent/70 via-accent to-accent/70"
            />
          </div>
        </div>
        {/* Skeleton cards */}
        <div className="w-full px-1 py-1 flex gap-3 overflow-x-hidden">
          {[1, 2, 3].map(n => (
            <div key={n} className="w-64 min-w-[256px] h-32 rounded-2xl bg-surface-secondary animate-pulse shrink-0" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-1.5 px-2">
      {/* Fetch-progress banner */}
      {fetchProgress && fetchProgress.visible && (
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface-secondary">
          <div className="flex items-center justify-between px-3 py-1 gap-3">
            <div className="flex items-center gap-1.5 min-w-0">
              {fetchProgress.completed < fetchProgress.total ? (
                <span className="relative flex size-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
              ) : (
                <span className="relative flex size-1.5 shrink-0">
                  <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                </span>
              )}
              <span className="text-[9px] font-bold text-foreground/70 truncate">
                {fetchProgress.completed < fetchProgress.total
                  ? fetchProgress.sourceName
                    ? `Fetching: ${fetchProgress.sourceName}`
                    : 'Fetching feeds...'
                  : 'Feeds updated'}
              </span>
            </div>
            <span className="text-[9px] font-extrabold text-accent shrink-0 tabular-nums">
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

      <div className="flex items-center justify-between px-1">
        <span
          className={'text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 select-none'}>
          <Plain2 className="size-3 text-accent" /> AI NEWS
        </span>
      </div>
      <ScrollShadow
        ref={scrollRef}
        orientation="horizontal"
        onPointerUp={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        className="w-full flex gap-3 overflow-x-auto scrollbar-hide pb-1.5 pt-1 pl-1 pr-4 select-none">
        {items.map(item => (
          <div
            className={
              'group relative w-64 min-w-[256px] h-32 rounded-2xl shrink-0 overflow-hidden isolate ' +
              'border border-white/10 cursor-pointer transform-gpu will-change-transform ' +
              'transition-all duration-300 ease-out flex flex-col ' +
              'hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md hover:shadow-black/20'
            }
            key={item.id}
            onClick={() => handleCardClick(item.link)}>
            {/* Image area — its own clipped box, so the hover zoom is contained here and
                never overlaps or seams against the caption panel below */}
            <div className="relative flex-1 min-h-0 overflow-hidden">
              {item.thumbnail && !failedImages[item.id] ? (
                <img
                  className={
                    'absolute inset-0 w-full h-full object-cover transition-transform ' +
                    'duration-500 ease-out group-hover:scale-110'
                  }
                  loading="lazy"
                  alt={item.title}
                  src={item.thumbnail}
                  onError={() => setFailedImages(prev => ({...prev, [item.id]: true}))}
                />
              ) : (
                <div
                  className={
                    'absolute inset-0 bg-linear-to-br from-accent/25 via-surface-secondary to-secondary/25 ' +
                    'flex items-center justify-center'
                  }>
                  {item.type === 'youtube' ? (
                    <SiYoutube className="size-9 text-red-500/70" />
                  ) : (
                    <DocumentText className="size-9 text-accent/60" />
                  )}
                </div>
              )}

              {/* Light top scrim, just enough to seat the badges on any image */}
              <div className="absolute inset-x-0 top-0 h-9 bg-linear-to-b from-black/60 to-transparent" />

              {/* Badges float over the image */}
              <div className="relative flex items-center justify-between gap-x-2 p-2.5 pointer-events-none">
                <span
                  className={
                    'text-[9px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded-full ' +
                    'bg-black/55 backdrop-blur-md border border-white/10 text-white shadow-sm ' +
                    'select-none truncate max-w-32'
                  }>
                  {item.sourceName}
                </span>
                <span
                  className={
                    'size-5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 ' +
                    'flex items-center justify-center shrink-0 shadow-sm'
                  }>
                  {item.type === 'youtube' ? (
                    <SiYoutube className="size-2.5 text-white" />
                  ) : (
                    <Earth className="size-2.5 text-white" />
                  )}
                </span>
              </div>

              {/* Play affordance for video items */}
              {item.type === 'youtube' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-surface/70 rounded-full p-1.5">
                    <Play className="size-8 ml-0.5 text-red-600/90 group-hover:scale-110 transition duration-200" />
                  </div>
                </div>
              )}
            </div>

            {/* Caption — a normal (non-absolute) sibling below the image box, so it can
                never overlap or seam against the zooming image */}
            <div
              className={
                'relative shrink-0 bg-surface-secondary border-t border-border ' +
                'px-2.5 py-1.5 flex flex-col gap-1 pointer-events-none'
              }>
              <h4 className="text-[11px] font-bold leading-snug line-clamp-2">{item.title}</h4>
              <span className="flex items-center gap-1 text-[8.5px] font-semibold text-muted">
                <ClockCircle className="size-2" /> {formatTimeAgo(item.isoDate)}
              </span>
            </div>
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
}
