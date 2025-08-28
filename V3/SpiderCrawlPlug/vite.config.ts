import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import manifest from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === 'production'

  return {
    build: {
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: 'SpiderCrawlPlug3',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugins: [crx({ manifest }), tailwindcss(), vue()],
    legacy: {
      skipWebSocketTokenCheck: true,
    },
  }
})
