// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: false },
  modules: ['nuxt-icon', '@vueuse/motion/nuxt'],
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
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})
