/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/Annamalai_ajay-portfolio/',
  build: {
    sourcemap: false,
    minify: 'terser'
  }
})
