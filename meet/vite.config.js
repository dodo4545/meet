import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: '/',
    server: {
      port: 5173, // Changed port to avoid conflict
      open: true
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    },
    define: {
      'process.env.VITE_REACT_APP_API_URL': JSON.stringify(env.VITE_REACT_APP_API_URL),
    },
  };
});
