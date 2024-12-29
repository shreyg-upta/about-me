// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ["react-tooltip"],
  },
  plugins: [react()],
  base: '/about-me/'  // Set the base path to your repository name
});
