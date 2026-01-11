import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
// Configured for React + Tailwind v4
export default defineConfig({
  plugins: [tailwindcss(), react()],
});
