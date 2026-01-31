import { defineConfig, loadEnv } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    publicDir: 'public',
    server: {
      open: true,
      port: 4501, // Changed port to avoid conflicts
      host: true,
      fs: {
        strict: false,
      },
      hmr: {
        port: 0, // Use a random available port
      },
      historyApiFallback: true, // Added fallback for client-side routing
    },
    build: {
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    define: {
      'import.meta.env.VITE_REACT_APP_API_URL': JSON.stringify(env.VITE_REACT_APP_API_URL),
    },
  };
});
