import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@larp-main/ui"],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    // Private config
    // nhostSubdomain: 'tkwleelnoiqszqxnesgw',
    // nhostRegion: 'eu-central-1',
    // Config within public will be also exposed to the client
    public: {
      nhostSubdomain: "tkwleelnoiqszqxnesgw",
      nhostRegion: "eu-central-1",
    },
    experimental: {
      asyncEntry: true,
      reactivityTransform: true,
    },
  },
});
