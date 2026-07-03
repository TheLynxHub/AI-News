import {useEffect, useState} from 'react';

import {extensionIpc} from '../../ipc';
import Compact from './Compact';
import Default from './Default';

export default function Index() {
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

    return extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
      if (state && state.homeView) {
        setHomeView(state.homeView);
      }
    });
  }, []);

  if (homeView === 'compact') {
    return <Compact />;
  }
  return <Default />;
}
