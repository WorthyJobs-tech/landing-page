import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.eot'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          const fontFiles = ['Nohemi-Regular.ttf', 'Nohemi-Bold.ttf', 'Nohemi-Medium.ttf', 'Nohemi-Light.ttf', 'Nohemi-SemiBold.ttf'];
          if (assetInfo.name && fontFiles.some(font => assetInfo.name?.includes(font))) {
            return 'fonts/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
