import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
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
