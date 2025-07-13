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
    include: ['src/**/*.spec.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules',
        'src/main.ts',
        'src/domains/**/*.{tsx,ts}',
        'src/lib/**/*.{tsx,ts}',
        '**/*.stories*'
      ],
      include: [
        'src/components/**/*.{tsx,ts}',
        'src/domains/**/*.{tsx,ts}',
        'src/hooks/**/*.{tsx,ts}',
        'src/pages/**/*.{tsx,ts}'
      ]
    }
  },
  resolve: {
    alias: [
      {
        find: '@/ds',
        replacement: path.resolve(dirname, './src/components/ds')
      },
      { find: '@', replacement: path.resolve(dirname, './src') }
    ]
  }
})
