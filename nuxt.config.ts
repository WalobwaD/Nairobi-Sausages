// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: false },
  modules: ['nuxt-icon'],
  css: [
    '~/assets/scss/global.scss'
  ],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      title: 'Nairobi Suasages',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/background.jpeg' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    },
  },
})
