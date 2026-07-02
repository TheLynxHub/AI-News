import {ScrollShadow} from '@heroui/react';
import {SiYoutube} from '@icons-pack/react-simple-icons';
import {NewsItem} from '@lynx_extension/cross/types';
import {ClockCircle, DocumentText, Earth, Plain2, Play} from '@solar-icons/react-perf/BoldDuotone';
import {useEffect, useState} from 'react';

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

export default function QuickViewCompact() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial state
    extensionIpc.lynxIpc
      .invoke('lynxhub-ai-news:get-state')
      .then((state: any) => {
        if (state && Array.isArray(state.cache)) {
          setItems(state.cache.slice(0, 5)); // Only show top 5 in Quick View
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load Quick View state:', err);
        setLoading(false);
      });

    // Listen for updates

    return extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state && Array.isArray(state.cache)) {
        setItems(state.cache.slice(0, 5));
      }
    });
  }, []);

  const handleCardClick = (link: string) => {
    if (link) extensionIpc.application.send.openUrlDefaultBrowser(link);
  };

  if (loading) {
    return (
      <div className="w-full px-2 py-1.5 flex gap-3 overflow-x-auto scrollbar-hide">
        {[1, 2, 3].map(n => (
          <div
            key={n}
            className={'w-72 min-w-[288px] h-20 bg-surface border border-divider ' + 'rounded-xl flex animate-pulse'}>
            <div className="w-20 h-full bg-surface-secondary rounded-l-xl shrink-0" />
            <div className="flex-1 flex flex-col p-2.5 gap-y-1.5 justify-between">
              <div className="h-3 bg-surface-secondary rounded w-16" />
              <div className="h-4 bg-surface-secondary rounded w-full" />
              <div className="h-2.5 bg-surface-secondary rounded w-12" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return null; // Don't show anything if cache is empty
  }

  return (
    <div className="w-full flex flex-col gap-1 py-0.5 px-2">
      <div className="flex items-center justify-between px-1">
        <span
          className={
            'text-[10px] font-bold text-accent uppercase tracking-widest ' + 'flex items-center gap-1 select-none'
          }>
          <Plain2 className="size-3 text-accent" /> AI NEWS
        </span>
      </div>
      <ScrollShadow orientation="horizontal" className="w-full flex gap-3 overflow-x-auto scrollbar-hide pb-2.5 pl-4">
        {items.map(item => (
          <div
            className={
              'w-72 min-w-[288px] h-20 bg-surface-secondary border ' +
              'hover:border-accent/50 rounded-xl flex transition-all duration-200 ' +
              'relative overflow-hidden cursor-pointer'
            }
            key={item.id}
            onClick={() => handleCardClick(item.link)}>
            {item.thumbnail ? (
              <div className="w-20 h-full relative shrink-0 overflow-hidden bg-surface-secondary">
                <img
                  className={
                    'w-full h-full object-cover rounded-l-xl transition-transform duration-500 hover:scale-105'
                  }
                  loading="lazy"
                  alt={item.title}
                  src={item.thumbnail}
                />
                {item.type === 'youtube' && (
                  <div
                    className={
                      'absolute inset-0 flex items-center justify-center ' +
                      'bg-black/20 hover:bg-black/40 transition-all duration-200'
                    }>
                    <div
                      className={
                        'size-6 rounded-full bg-red-600 flex ' + 'items-center justify-center text-white shadow-md'
                      }>
                      <Play className="size-3 ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={
                  'w-20 h-full bg-linear-to-br from-accent/10 to-secondary/10 ' +
                  'rounded-l-xl shrink-0 flex items-center justify-center'
                }>
                {item.type === 'youtube' ? (
                  <SiYoutube className="size-5 text-red-600" />
                ) : (
                  <DocumentText className="size-5 text-accent" />
                )}
              </div>
            )}

            <div className="flex-1 flex flex-col p-2.5 min-w-0 justify-between">
              <div className="flex items-center justify-between gap-x-2">
                <span
                  className={
                    'text-[9px] font-extrabold uppercase tracking-wide px-1.5 ' +
                    'py-0.5 rounded bg-accent/10 text-accent select-none ' +
                    'truncate max-w-30'
                  }>
                  {item.sourceName}
                </span>
                {item.type === 'youtube' ? (
                  <SiYoutube className="size-3.5 text-red-600 shrink-0" />
                ) : (
                  <Earth className="size-3 text-accent shrink-0" />
                )}
              </div>

              <div className="flex flex-col min-w-0 mt-0.5 pointer-events-none">
                <h4
                  className={
                    'text-[10px] font-bold leading-snug line-clamp-2 ' +
                    'text-foreground/90 group-hover:text-foreground'
                  }>
                  {item.title}
                </h4>
              </div>

              <div className="flex items-center justify-between text-[8px] text-muted-foreground mt-1 select-none">
                <span className="flex items-center gap-1 font-semibold">
                  <ClockCircle className="size-2" /> {formatTimeAgo(item.isoDate)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
}
