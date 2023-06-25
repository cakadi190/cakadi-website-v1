// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    buildAssetsDir: './'
  },

  buildDir: './.nuxt',
})
