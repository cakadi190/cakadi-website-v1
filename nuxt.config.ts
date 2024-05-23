// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/scss/app.scss',
  ],

  modules: [
    '@vueuse/motion/nuxt',
    "@nuxt/image",
    'nuxt-swiper',
    "nuxt-svgo",
    '@vesp/nuxt-fontawesome',
    'nuxt-icon',
    ["@nuxtjs/google-fonts", {
      families: {
        Signika: true,
        'Fira Code': true,
        Merriweather: true
      },
      download: true,
      base64: true,
      display: 'swap',
      preload: true,
      useStylesheet: true,
      overwriting: true,
      inject: true,
    }]
  ],
})