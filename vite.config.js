import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Annamalai_ajay-portfolio/',
  build: {
    sourcemap: false,
    minify: 'terser'
  }
})
