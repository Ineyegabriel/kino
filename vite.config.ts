import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@Layout': path.resolve(__dirname, './src/Layout'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  plugins: [react()],
  publicDir: 'public',
});
