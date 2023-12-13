// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt'

  ],
  formkit: {
    autoImport: true
  },
  content: {

  }
})
