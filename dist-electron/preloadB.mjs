"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("apiB", {
  ping: (input) => electron.ipcRenderer.invoke("apiB:sendToA", input),
  onMessage: (callback) => {
    electron.ipcRenderer.on("apiB:onMessage", callback);
  }
});
console.log("preloadB.mjs");
