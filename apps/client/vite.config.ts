import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/health': {
        target: 'http://localhost:3000/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  }
})
