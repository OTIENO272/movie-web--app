import { defineConfig } from 'vite'
import react from '@vitejs/react-bundle' // or '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

