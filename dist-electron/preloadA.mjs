"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("apiA", {
  ping: (input) => electron.ipcRenderer.send("apiA:sendToB", input),
  onMessage: (callback) => {
    electron.ipcRenderer.on("apiA:onMessage", callback);
  }
});
console.log("preload.mjs");
