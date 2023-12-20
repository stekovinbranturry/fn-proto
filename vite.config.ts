import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'react-amap',
      formats: ['es'],
      // fileName: (format) => `react-amap.${format}.js`,
    },
  },
  plugins: [react()],
});
