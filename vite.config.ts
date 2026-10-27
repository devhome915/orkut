import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/orkut/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/db.json'],
    },
  },
})