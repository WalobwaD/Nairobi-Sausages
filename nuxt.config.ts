// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/color-mode'],
  css: [
    '~/assets/scss/global.scss'
  ],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  }
})
