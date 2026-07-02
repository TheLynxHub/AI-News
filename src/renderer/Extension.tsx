import './index.css';

import {ExtensionRendererApi} from '@lynx/plugins/extensions/types/api';
import {RendererIpcApi} from '@lynx/plugins/extensions/types/ipcWrapper';

import NewsCard from './components/NewsCard';
import QuickView from './components/QuickView';
import {setExtensionIpc} from './ipc';

export function InitialExtensions(lynxAPI: ExtensionRendererApi, rendererIpc: RendererIpcApi, id: string) {
  setExtensionIpc(rendererIpc, id);

  // Add the news card trigger on the Others page cards container
  lynxAPI.customizePages.others.add.cardsContainer(NewsCard);

  // Add the news Quick View carousel to the top of the Home page
  lynxAPI.customizePages.home.add.scrollTop(QuickView);
}
