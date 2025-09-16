"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("apiB", {
  send: (input) => electron.ipcRenderer.invoke("apiB:sendToA", input),
  normalSend: (input) => electron.ipcRenderer.invoke("apiB:normalSendToA", input),
  onMessage: (callback) => {
    electron.ipcRenderer.on("apiB:onMessage", callback);
  }
});
console.log("preloadB.mjs");
