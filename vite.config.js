import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/invite/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
