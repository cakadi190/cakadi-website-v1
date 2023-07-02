// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/app.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'id-ID'
      },
      meta: [
        { "name": "viewport", "content": "width=device-width, initial-scale=1" },
        { "charset": "utf-8" },
      ],
      link: [
        { key: 'fontawesome', rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },
})
