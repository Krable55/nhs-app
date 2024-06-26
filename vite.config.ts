import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
// <script src="https://cdn.jsdelivr.net/gh/Krable55/nhs-app/dist/assets/app-Cp1p8702.js"></script>

export default defineConfig({
  base: 'https://cdn.jsdelivr.net/gh/Krable55/nhs-app/dist/',
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: './src/main.tsx',
      },
    },
  },
})
