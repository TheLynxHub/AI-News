import {RendererIpcApi} from '@lynx/plugins/extensions/types/ipcWrapper';

export let extensionIpc: RendererIpcApi;
export let extensionId: string;

export function setExtensionIpc(ipc: RendererIpcApi, id: string) {
  extensionIpc = ipc;
  extensionId = id;
}
