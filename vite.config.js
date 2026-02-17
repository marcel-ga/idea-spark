import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This ensures the entry point is correctly identified
    rollupOptions: {
      input: 'index.html',
    },
  },
})
