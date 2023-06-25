// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  build: {
    extend(config, {  loaders }) {
      loaders.module.rules.push({
        test: /\.postcss$/,
        use: [
          {
            loader: 'postcss-loader'
          }
        ]
      })
    }
  },
})
