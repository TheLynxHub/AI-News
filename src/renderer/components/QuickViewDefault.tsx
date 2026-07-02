import {Skeleton} from '@heroui/react';
import {SiYoutube} from '@icons-pack/react-simple-icons';
import {NewsItem} from '@lynx_extension/cross/types';
import {ClockCircle, DocumentText, Plain2, Play} from '@solar-icons/react-perf/BoldDuotone';
import {useCallback, useEffect, useState} from 'react';

import {extensionIpc} from '../ipc';

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

// Elegant SVG Icons for Navigation
const ChevronLeft = () => (
  <svg fill="none" strokeWidth={2.5} className="size-5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg fill="none" strokeWidth={2.5} className="size-5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AUTO_PLAY_SPEED = 6000; // 6 seconds per slide
const UPDATE_INTERVAL = 30; // 30ms for smooth progress bar animation

export default function QuickViewDefault() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    extensionIpc.lynxIpc
      .invoke('lynxhub-ai-news:get-state')
      .then((state: any) => {
        if (state && Array.isArray(state.cache)) {
          setItems(state.cache.slice(0, 5)); // Keep top 5 for coverflow
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load Quick View state:', err);
        setLoading(false);
      });

    // noinspection UnnecessaryLocalVariableJS
    const cleanup = extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state && Array.isArray(state.cache)) {
        setItems(state.cache.slice(0, 5));
      }
    });

    return cleanup;
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
    setProgress(0);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
    setProgress(0);
  }, [items.length]);

  const goToIndex = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer logic for Auto-scroll & Progress Bar
  useEffect(() => {
    if (isHovered || items.length <= 1) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + (UPDATE_INTERVAL / AUTO_PLAY_SPEED) * 100;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, items.length, handleNext]);

  const handleCardClick = (link: string) => {
    if (link) {
      extensionIpc.application.send.openUrlDefaultBrowser(link);
    }
  };

  // Masterpiece Loading Skeleton
  if (loading) {
    return (
      <div className={'w-full flex flex-col gap-3 py-4 relative h-72 overflow-hidden items-center justify-center'}>
        {/* Left card skeleton (translated) */}
        <div
          className={
            'absolute translate-x-[-65%] sm:translate-x-[-75%] scale-[0.85] z-20 ' +
            'w-64 sm:w-96 h-48 sm:h-60 rounded-3xl opacity-40 overflow-hidden'
          }>
          <Skeleton className="w-full h-full" />
        </div>

        {/* Center card skeleton (active) */}
        <div
          className={
            'absolute translate-x-0 scale-100 z-30 w-64 sm:w-96 h-48 sm:h-60 ' +
            'rounded-3xl border border-divider shadow-2xl ' +
            'bg-surface flex flex-col justify-end p-5 sm:p-7 gap-2 overflow-hidden'
          }>
          {/* Skeleton overlay inside card */}
          <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end gap-3 z-10">
            {/* Top source badge skeleton */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <Skeleton className="w-20 h-5 rounded-full" />
              <Skeleton className="size-8 sm:size-9 rounded-full" />
            </div>
            {/* Title skeletons */}
            <Skeleton className="w-full h-5 sm:h-6 rounded-lg" />
            <Skeleton className="w-3/4 h-5 sm:h-6 rounded-lg" />
            {/* Time ago skeleton */}
            <Skeleton className="w-20 h-4 rounded-md mt-1" />
          </div>
        </div>

        {/* Right card skeleton (translated) */}
        <div
          className={
            'absolute translate-x-[65%] sm:translate-x-[75%] scale-[0.85] z-20 ' +
            'w-64 sm:w-96 h-48 sm:h-60 rounded-3xl opacity-40 overflow-hidden'
          }>
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    );
  }

  if (items.length === 0) return null;

  return (
    <div className="w-full flex flex-col py-4 relative group overflow-hidden h-72">
      {/* Header section */}
      <div className="relative z-40 flex items-center justify-between px-6 mb-4">
        <span
          className={
            'text-[11px] font-black text-foreground/90 uppercase tracking-[0.2em] ' +
            'flex items-center gap-2 select-none drop-shadow-sm'
          }>
          <Plain2 className="size-4 text-accent" /> AI NEWS
        </span>

        {/* Navigation Dots */}
        <div
          className={
            'flex gap-1.5 items-center bg-background/40 backdrop-blur-md px-2.5 ' +
            'py-1.5 rounded-full border border-divider/50'
          }>
          {items.map((_, idx) => (
            <button
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-6 bg-accent shadow-[0_0_8px_rgba(var(--accent),0.6)]'
                  : 'w-1.5 bg-foreground/20 hover:bg-foreground/50'
              }`}
              key={idx}
              onClick={e => goToIndex(idx, e)}
            />
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-56 sm:h-72 flex items-center justify-center">
        {/* Floating Controls */}
        <button
          onClick={e => {
            e.stopPropagation();
            handlePrev();
          }}
          className={
            'absolute left-2 sm:left-4 z-50 p-2.5 sm:p-3 rounded-full bg-background/60 ' +
            'hover:bg-background/90 backdrop-blur-xl border border-divider text-foreground/70 ' +
            'hover:text-foreground transition-all duration-300 shadow-xl opacity-0 ' +
            'group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 focus:opacity-100'
          }>
          <ChevronLeft />
        </button>
        <button
          onClick={e => {
            e.stopPropagation();
            handleNext();
          }}
          className={
            'absolute right-2 sm:right-4 z-50 p-2.5 sm:p-3 rounded-full bg-background/60 ' +
            'hover:bg-background/90 backdrop-blur-xl border border-divider text-foreground/70 ' +
            'hover:text-foreground transition-all duration-300 shadow-xl opacity-0 ' +
            'group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 focus:opacity-100'
          }>
          <ChevronRight />
        </button>

        {items.map((item, index) => {
          // Calculate smart offsets for seamless endless looping perception
          let offset = index - currentIndex;
          const total = items.length;
          if (total > 2) {
            const half = Math.floor(total / 2);
            if (offset > half) offset -= total;
            if (offset < -half) offset += total;
          }

          const isCenter = offset === 0;

          // Compute smooth coverflow styles based on position
          const cardStyles =
            offset === 0
              ? 'translate-x-0 scale-100 opacity-100 z-40 blur-none shadow-2xl shadow-accent/10'
              : offset === 1
                ? 'translate-x-[65%] sm:translate-x-[75%] scale-[0.85] z-30 opacity-60 ' +
                  'hover:opacity-100 blur-[2px] hover:blur-none cursor-pointer'
                : offset === -1
                  ? '-translate-x-[65%] sm:-translate-x-[75%] scale-[0.85] z-30 opacity-60 ' +
                    'hover:opacity-100 blur-[2px] hover:blur-none cursor-pointer'
                  : offset === 2
                    ? 'translate-x-[110%] sm:translate-x-[130%] scale-75 z-20 opacity-0 ' + 'pointer-events-none'
                    : offset === -2
                      ? '-translate-x-[110%] sm:-translate-x-[130%] scale-75 z-20 opacity-0 ' + 'pointer-events-none'
                      : 'scale-50 opacity-0 z-0 pointer-events-none';

          return (
            <div
              onClick={e => {
                if (isCenter) handleCardClick(item.link);
                else goToIndex(index, e);
              }}
              className={
                `absolute w-64 sm:w-96 h-48 sm:h-60 rounded-3xl ` +
                `transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.2,1)] ` +
                `overflow-hidden bg-surface-secondary border border-border ` +
                `${cardStyles} ${isCenter ? 'hover:scale-[1.02] cursor-pointer ring-1 ring-white/20' : ''}`
              }
              key={item.id}>
              {/* Full Background Image */}
              {item.thumbnail ? (
                <img
                  className={
                    'absolute inset-0 w-full h-full object-cover transition-transform ' +
                    'duration-[10s] ease-out group-hover:scale-110'
                  }
                  alt={item.title}
                  src={item.thumbnail}
                />
              ) : (
                <div
                  className={
                    'absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 ' +
                    'flex items-center justify-center'
                  }>
                  {item.type === 'youtube' ? (
                    <SiYoutube className="size-16 text-red-600/80" />
                  ) : (
                    <DocumentText className="size-16 text-accent/80" />
                  )}
                </div>
              )}

              {/* Masterpiece Dark Gradient Overlay (Guarantees Text Readability) */}
              <div
                className={
                  'absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10 ' + 'mix-blend-multiply'
                }
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              {/* Top Badges */}
              <div className={'absolute top-4 left-4 right-4 ' + 'flex justify-between items-start z-10'}>
                <span
                  className={
                    'px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ' +
                    'text-[9px] sm:text-[10px] font-extrabold text-white uppercase tracking-widest ' +
                    'max-w-30 truncate shadow-sm'
                  }>
                  {item.sourceName}
                </span>
                <div
                  className={
                    'flex items-center justify-center size-8 sm:size-9 rounded-full bg-black/40 ' +
                    'backdrop-blur-md border border-white/10 text-white shadow-lg'
                  }>
                  {item.type === 'youtube' ? (
                    <Play className="size-3.5 sm:size-4 ml-0.5 text-red-500" />
                  ) : (
                    <DocumentText className="size-3.5 sm:size-4 text-blue-400" />
                  )}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 pb-6 sm:pb-7 flex flex-col gap-1.5 z-10">
                <h4
                  className={
                    'text-white font-extrabold text-sm sm:text-base leading-tight ' + 'line-clamp-2 drop-shadow-xl'
                  }>
                  {item.title}
                </h4>
                <div
                  className={
                    'flex items-center gap-1.5 text-[9px] sm:text-[10px] text-white/70 ' + 'font-semibold tracking-wide'
                  }>
                  <ClockCircle className="size-3" />
                  {formatTimeAgo(item.isoDate)}
                </div>
              </div>

              {/* Glowing Auto-Scroll Timer (Only active on the centered item) */}
              {isCenter && (
                <div className={'absolute bottom-0 inset-x-0 h-px bg-black/30 backdrop-blur-xs z-20 overflow-hidden'}>
                  <div
                    style={{
                      width: `${progress}%`,
                      transition: isHovered ? 'none' : `width ${UPDATE_INTERVAL}ms linear`,
                    }}
                    className={
                      'h-full bg-linear-to-r from-white/10 via-white/50 to-white ' +
                      'relative shadow-[0_0_8px_rgba(var(--accent),0.6)] rounded-full'
                    }>
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-xs" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
