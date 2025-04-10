import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // SVGR options
        icon: true,
        dimensions: false,
      },
    }),
  ],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
  server: {
    historyApiFallback: true,
  },
});
