import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // <--- Importa el módulo 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: { // <--- Agrega la propiedad 'resolve'
    alias: {
      '@': path.resolve(__dirname, './src'), // <--- Configura el alias '@'
      '~': path.resolve(__dirname, './lib'),
    },
  },
});