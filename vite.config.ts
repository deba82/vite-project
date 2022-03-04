import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import windi from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include:[/\.vue$/, /\.md$/]
    }),
    
    Pages({
    dirs:"src/pages",
    extensions:['md','vue']
  }),
  Markdown(),
  windi()
]
})
