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

  // build: {
  //   analyze: {
  //     analyzerMode: 'static'
  //   },
  // },

  vite: {
    publicDir: './public',
  },

  app: {
    head: {
      "meta": [
        { "name": "viewport", "content": "width=device-width, initial-scale=1, user-scalable=0" },
        { "charset": "utf-8" },
      ],
    }
  },
})
