import { resolve } from "node:path";
import { defineConfig } from "vite";

// Cada página do app é uma entrada própria (multi-page).
const pages = ["index", "u1", "u3", "u4", "u5", "u6", "mestrado", "writing"];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p, resolve(import.meta.dirname, `${p}.html`)])),
    },
  },
});
