import { defineConfig } from 'vitest/config'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [svgr()],
  test: {
    name: 'unit',
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    css: true,
    include: ['src/**/*.spec.{ts,tsx}']
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(dirname, './src') }]
  }
})
