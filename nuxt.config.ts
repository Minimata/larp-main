import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
  ],
  pinia: {
    autoImports: ['defineStore'],
  },
  typescript: {
    strict: true,
  },
  vueuse: {
    ssrHandlers: true,
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
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    databaseURL:
      'postgresql://postgres:alexandreserex94@db.vngcslghbcwbraflzlcf.supabase.co:5432/postgres',
  },
})
