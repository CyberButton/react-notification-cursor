import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // Default Vite port
    proxy: {
      "/api": {
        target: "http://localhost:8080", // backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
