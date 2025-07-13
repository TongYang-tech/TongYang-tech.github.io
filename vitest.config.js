import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/*.test.js']
    },
    projects: [
      {
        test: {
          name: 'client',
          root: './src/app',
          include: ['**/*.test.js', '**/*.test.jsx']
        }
      }
    ]
  },
})