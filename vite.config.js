import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/test-repoi/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/_variables.scss";`,
        includePaths: [path.resolve(__dirname, './src/scss')]
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
