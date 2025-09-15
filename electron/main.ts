import { app, BrowserWindow } from "electron"

import url from 'url'

import path from 'path'



let __filename = url.fileURLToPath(import.meta.url)

let __dirname = path.dirname(__filename)



//创建窗口

const createWindowA = () => {

    const mainWindow = new BrowserWindow({

        width: 600, //设置窗口宽度(单位:像素)

        height: 600, //设置窗口高度

        icon: "electron/resource/images/code.ico", //设置窗口图标

        autoHideMenuBar: true, //隐藏菜单栏

        webPreferences: { //网页偏好设置

            nodeIntegration: true, //允许在渲染进程中直接使用 Node.js API

            contextIsolation: true, //启用上下文隔 (提高安全性)

            preload: path.resolve(__dirname, "preloadA.mjs"), //预加载脚本

        }

    })



    //mainWindow.loadURL("http://localhost:5173")

    //VITE_DEV_SERVER_URL 是开发服务器的 url, 只在开发环境中存在

    mainWindow.loadURL(`${process.env['VITE_DEV_SERVER_URL']}/#/windowA`)

}

const createWindowB = () => {

    const mainWindow = new BrowserWindow({

        width: 600, //设置窗口宽度(单位:像素)

        height: 600, //设置窗口高度

        icon: "electron/resource/images/code.ico", //设置窗口图标

        autoHideMenuBar: true, //隐藏菜单栏

        webPreferences: { //网页偏好设置

            nodeIntegration: true, //允许在渲染进程中直接使用 Node.js API

            contextIsolation: true, //启用上下文隔 (提高安全性)

            preload: path.resolve(__dirname, "preloadB.mjs"), //预加载脚本

        }

    })



    //mainWindow.loadURL("http://localhost:5173")

    //VITE_DEV_SERVER_URL 是开发服务器的 url, 只在开发环境中存在

    mainWindow.loadURL(`${process.env['VITE_DEV_SERVER_URL']}/#/windowB`)

}



//当应用准备就绪后创建窗口

app.whenReady().then(() => {

    createWindowA()

    createWindowB()

})