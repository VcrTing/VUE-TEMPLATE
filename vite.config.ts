import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    Layouts({
      layoutsDirs: './src/cake/layout'
    }),

    Pages({
      dirs: [ './src/pages' ]
    }),
  
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      vueTemplate: true,
    }),

    Components({
      dirs: [ './src/components', './src/ui/*', './src/cake/*', './src/views/*' ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
