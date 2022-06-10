import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '124.223.167.91',
    port: 3000,
    open: true,
    proxy: {
      '/getImg': {
        target: 'http://api.wpbom.com/api/wallpa.php',
        ws: true,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/getImg/, '')
      }
    }
  }
})