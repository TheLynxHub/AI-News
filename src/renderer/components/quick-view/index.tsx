import {useEffect, useState} from 'react';

import {extensionIpc} from '../../ipc';
import Compact from './Compact';
import Default from './Default';

export default function Index() {
  const [homeView, setHomeView] = useState<'default' | 'compact'>('default');
  const [showInHome, setShowInHome] = useState(true);

  useEffect(() => {
    if (showInHome) {
      extensionIpc.lynxIpc
        .invoke('lynxhub-ai-news:get-state')
        .then((state: any) => {
          if (state) {
            if (state.homeView) setHomeView(state.homeView);
            setShowInHome(state.showInHome !== false);
          }
        })
        .catch(err => {
          console.error('Failed to load Quick View setting:', err);
        });

      return extensionIpc.lynxIpc.on('lynxhub-ai-news:state-updated', (state: any) => {
        if (state) {
          if (state.homeView) setHomeView(state.homeView);
          if (state.showInHome !== undefined) setShowInHome(state.showInHome);
        }
      });
    } else {
      return () => {};
    }
  }, [showInHome]);

  if (!showInHome) return null;

  if (homeView === 'compact') {
    return <Compact />;
  }
  return <Default />;
}
