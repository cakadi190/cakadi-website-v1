// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      "meta": [
        { "name": "viewport", "content": "width=device-width, initial-scale=1, user-scalable=0" },
        { "charset": "utf-8" },
      ],
      link: [
        { key: 'fontawesome', rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },
})
