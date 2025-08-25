import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Match your GitHub repository name correctly (Portfolio not Porfolio)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
