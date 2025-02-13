import { defineConfig } from "vite";
import * as path from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@babel/core": path.join(process.cwd(), "src", "babel.js"),
    },
  },
  define: {
    "process.env": {},
  },
});
