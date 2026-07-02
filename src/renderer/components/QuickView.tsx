import {useEffect, useState} from 'react';

import {extensionIpc} from '../ipc';
import QuickViewCompact from './QuickViewCompact';
import QuickViewDefault from './QuickViewDefault';

export default function QuickView() {
  const [homeView, setHomeView] = useState<'default' | 'compact'>('default');

  useEffect(() => {
    extensionIpc.lynxIpc
      .invoke('lynxhub-ai-news:get-state')
      .then((state: any) => {
        if (state && state.homeView) {
          setHomeView(state.homeView);
        }
      })
      .catch(err => {
        console.error('Failed to load Quick View setting:', err);
      });

    const cleanup = extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state && state.homeView) {
        setHomeView(state.homeView);
      }
    });

    return cleanup;
  }, []);

  if (homeView === 'compact') {
    return <QuickViewCompact />;
  }
  return <QuickViewDefault />;
}
