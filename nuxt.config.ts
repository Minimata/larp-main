import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
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
})
