import './index.css';

import {ExtensionRendererApi} from '@lynx/plugins/extensions/types/api';
import {RendererIpcApi} from '@lynx/plugins/extensions/types/ipcWrapper';
import {Plain2} from '@solar-icons/react-perf/BoldDuotone';

import {SENTRY_DSN} from '../cross/constants';
import NewsPage from './components/NewsPage';
import Index from './components/quick-view';
import {setExtensionIpc} from './ipc';

// noinspection JSUnusedGlobalSymbols
export function InitialExtensions(lynxAPI: ExtensionRendererApi, rendererIpc: RendererIpcApi, id: string) {
  lynxAPI.initBrowserSentry(SENTRY_DSN);

  setExtensionIpc(rendererIpc, id);

  // Register AI News page route with sidebar nav button
  lynxAPI.router.addPage({
    id: 'ai-news',
    title: 'AI News',
    icon: <Plain2 className="size-full" />,
    component: NewsPage,
  });

  // Add the news Quick View carousel to the top of the Home page
  lynxAPI.customizePages.home.add.scrollTop(Index);
}
