import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('apiA', {
  ping: (input: string) => ipcRenderer.send('apiA:sendToB', input),
  onMessage: (callback: (event: any, input: string) => void) => {
    ipcRenderer.on('apiA:onMessage', callback)
  }
})

console.log("preload.mjs")