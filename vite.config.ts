import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// Define your site URL
const SITE_URL = 'https://worthyjobs.in'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: SITE_URL, // Your website URL
      exclude: ['/404'], // Exclude pages like 404 if necessary
    }),
  ],
  base: "./",
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.eot'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          const fontFiles = ['Nohemi-Regular.ttf', 'Nohemi-Bold.ttf', 'Nohemi-Medium.ttf', 'Nohemi-Light.ttf', 'Nohemi-SemiBold.ttf']
          if (assetInfo.name && fontFiles.some(font => assetInfo.name?.includes(font))) {
            return 'fonts/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
