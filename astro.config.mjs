// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

// Node supplies this environment flag; runtime types are not needed for the config.
// @ts-ignore
const githubPages = process.env.GITHUB_PAGES === "true";

// https://astro.build/config
export default defineConfig({
  site: "https://vivian-xu03.github.io",
  image: { service: { entrypoint: "astro/assets/services/noop" } },
  integrations: [react(), markdoc(), ...(githubPages ? [] : [keystatic()])],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  output: githubPages ? "static" : "server",

  adapter: githubPages ? undefined : vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
