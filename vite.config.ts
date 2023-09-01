import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: { open: false,
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/api": {
        target: "http://127.0.0.1:8881/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
