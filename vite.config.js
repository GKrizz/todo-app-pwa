import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/', // ✅ IMPORTANT for Vercel

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'gobal1.png'],
      manifest: {
        name: 'Todo App',
        short_name: 'Todo',
        description: 'Todo App PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#1d4ed8',
        icons: [
          {
            src: 'gobal1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'gobal1.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})