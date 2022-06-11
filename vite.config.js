import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import StylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  base: '/translate-big5-gbk',
  plugins: [
    StylelintPlugin(),
    VitePWA({
      mode: 'development',
      srcDir: 'src',
      filename: 'sw.js',
      base: '/translate-big5-gbk/',
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: '繁簡轉換',
        short_name: '繁簡轉換',
        description: '繁簡轉換',
        theme_color: '#0079d2',
        start_url: './index.html',
        lang: 'zh-Hant-HK',
        dir: 'ltr',
        orientation: 'portrait',
        icons: [
          {
            src: 'img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
})
