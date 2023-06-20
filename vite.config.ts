import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, './src/Components'),
      "@Models": path.resolve(__dirname, './src/Models'),
      "@Services": path.resolve(__dirname, './src/Services'),
      "@Store": path.resolve(__dirname, './src/Store'),

      "@Slick-carousel": path.resolve(__dirname, './node_modules/slick-carousel')
    },
  },

})
