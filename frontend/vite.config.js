import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a0cf015d7a32f4ac1a98250f12d40b2e-1631327327.ap-southeast-1.elb.amazonaws.com'
    ]
  }
})
