import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('apiB', {
  ping: (input: string) => ipcRenderer.invoke('apiB:sendToA', input),
  onMessage: (callback: (event: any, input: string) => void) => {
    ipcRenderer.on('apiB:onMessage', callback)
  }
})

console.log("preloadB.mjs")