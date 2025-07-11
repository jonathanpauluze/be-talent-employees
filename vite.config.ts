/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(dirname, './src')
      }
    ]
  }
})
