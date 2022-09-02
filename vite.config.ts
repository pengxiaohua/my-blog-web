import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@':'/src/',      //格式一定要写对喽不然没有代码提示或者报错
    }
  }
})
