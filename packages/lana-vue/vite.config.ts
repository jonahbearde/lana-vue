import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    Dts({
      tsconfigPath: resolve(__dirname, './tsconfig.app.json'),
    }),
    AutoImport({
      imports: ['vue'],
      dts: true,
    }),
    visualizer(),
  ],
  build: {
    lib: {
      formats: ['es'],
      name: 'lana-vue',
      fileName: (_, name) => `${name}.mjs`,
      entry: {
        index: resolve(__dirname, './index.ts'),
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: 'styles.css',
      },
      external: ['vue'],
    },
    emptyOutDir: true,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      'lana-vue': resolve(__dirname),
    },
  },
})
