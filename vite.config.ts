import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron/simple'  // 添加此行 simple表示简单模式
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
   vue(),
   electron({   //开始添加起
     main: {
       entry: 'electron/main.ts',
     },
     preload: {
       input: {
         preloadA: 'electron/preloadA.ts',
         preloadB: 'electron/preloadB.ts',
       },
       vite: {
         build: {
           rollupOptions: {
             output: {
               inlineDynamicImports: false,
             },
           },
         },
       },
     },
   }),
 ],  //开始添加结束
})