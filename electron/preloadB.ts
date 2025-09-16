import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('apiB', {
  send: (input: string) => ipcRenderer.invoke('apiB:sendToA', input),
  normalSend: (input: string) => ipcRenderer.invoke('apiB:normalSendToA', input),
  onMessage: (callback: (event: any, input: string) => void) => {
    ipcRenderer.on('apiB:onMessage', callback)
  }
})

console.log("preloadB.mjs")