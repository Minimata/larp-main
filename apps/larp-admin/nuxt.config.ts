import { defineNuxtConfig } from "nuxt";
import tailwindConfig from "./tailwind.config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  typescript: {
    strict: true,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ["@urql/vue"],
  },
  css: ["~/assets/css/tailwind.css"],

  // Defaults options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: tailwindConfig,
    injectPosition: 0,
    viewer: true,
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
  },
  experimental: {
    asyncEntry: true,
    reactivityTransform: true,
  },
});
