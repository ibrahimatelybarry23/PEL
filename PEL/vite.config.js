import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cpp-practice/',  // ← cambia con il nome del tuo repo
  assetsInclude: ['**/*.md'],
})
