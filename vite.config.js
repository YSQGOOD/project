import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { VantResolver } from '@vant/auto-import-resolver';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),

  ],
  // server: {
  //   proxy:  {
  //     '/api': {
  //       target: 'http://localhost:3000', 
  //       changeOrigin: true, 
  //       rewrite: (path) => path.replace(/^\/api/, '') 
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
