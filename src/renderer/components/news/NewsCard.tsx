import {Description, Link} from '@heroui/react';
import {SiYoutube} from '@icons-pack/react-simple-icons';
import {getCacheUrl} from '@lynx_common/utils';
import {NewsItem} from '@lynx_extension/cross/types';
import {Earth} from '@solar-icons/react-perf/BoldDuotone';
import {Clock, Play} from 'lucide-react';
import {useEffect, useState} from 'react';

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

interface NewsCardProps {
  item: NewsItem;
  onOpenLink: (url: string) => void;
}

export default function NewsCard({item, onOpenLink}: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item.thumbnail]);

  useEffect(() => {
    if (!item.thumbnail && item.link && item.type !== 'youtube') {
      extensionIpc.lynxIpc.invoke('lynxhub-ai-news:fetch-item-thumbnail', item.id, item.link).catch(err => {
        console.error('Failed to fetch item thumbnail on-demand:', err);
      });
    }
  }, [item.id, item.link, item.thumbnail, item.type]);

  return (
    <div
      className={
        'group bg-surface hover:bg-foreground/3 ' +
        'rounded-3xl flex p-4 transition-all ' +
        'duration-200 relative overflow-hidden cursor-pointer'
      }
      onClick={() => onOpenLink(item.link)}>
      {item.thumbnail && !imgError ? (
        <div
          className={'w-28 h-20 relative shrink-0 overflow-hidden bg-surface-secondary rounded-2xl mr-4 self-center'}>
          <img
            loading="lazy"
            alt={item.title}
            src={getCacheUrl(item.thumbnail)}
            onError={() => setImgError(true)}
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {item.type === 'youtube' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div
                className={'size-8 rounded-full bg-red-600 flex ' + 'items-center justify-center text-white shadow-md'}>
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
            'self-center border border-border'
          }>
          {item.type === 'youtube' ? (
            <SiYoutube className="size-7 text-red-600" />
          ) : (
            <Earth className="size-7 text-accent" />
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
              <Earth className="size-3.5 text-accent shrink-0" />
            )}
          </div>
          <h3
            className={
              'text-xs font-extrabold text-foreground mt-1.5 leading-snug ' +
              'line-clamp-2 hover:text-accent transition-colors duration-200'
            }>
            {item.title}
          </h3>

          <Description className="text-[11px] text-muted line-clamp-2 mt-1">{item.snippet}</Description>
        </div>

        <div className={'flex items-center justify-between text-[10px] text-muted mt-4 select-none'}>
          <span className="flex items-center gap-x-1.5 font-bold">
            <Clock className="size-3" /> {formatTimeAgo(item.isoDate)}
          </span>
          <Link onPress={() => onOpenLink(item.link)} className="text-[9px] font-bold text-accent">
            View Content <Link.Icon className="size-2.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
