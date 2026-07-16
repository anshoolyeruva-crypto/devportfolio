// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/devportfolio",
  site: "https://anshoolyeruva-crypto.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
