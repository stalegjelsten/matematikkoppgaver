import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tavle/",
  build: {
    outDir: "../src/site/tavle",
    emptyOutDir: true,
  },
});
