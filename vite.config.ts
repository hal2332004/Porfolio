import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/Porfolio/', // Match your GitHub repository name
=======
  base: '/Portfolio/', // Match your GitHub repository name correctly (Portfolio not Porfolio)
>>>>>>> 90bce7e (add package and vite config)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
