import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a9131a454c62e4164bce013a5e3ea9a2-606541737.ap-southeast-1.elb.amazonaws.com'
    ]
  }
})
