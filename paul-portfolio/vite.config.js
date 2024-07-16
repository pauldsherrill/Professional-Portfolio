import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ["**/*.JPG"],
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
