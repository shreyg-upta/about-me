
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/about-me/', // Set base path to your deployment subpath
  optimizeDeps: {
    include: [
      'react-tooltip',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
