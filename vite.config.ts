import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites are served from /<repo>/.
  // In CI we set BASE_PATH accordingly; locally it stays "/".
  base: process.env.BASE_PATH ?? '/',
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
