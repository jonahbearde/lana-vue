import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    Dts({
      tsconfigPath: resolve(__dirname, './tsconfig.app.json'),
    }),
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
      external: ['vue'],
    },
  },
})
