
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/about-me/',  // Set the base path to your repository name
  optimizeDeps: {
    include: [
      'react-tooltip',
    ],
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
