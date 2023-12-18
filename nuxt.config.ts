// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css"
  ],
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
      usePrimeVue: true,
      options: {
        ripple: true,
      },
      importPT: undefined,
      cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
      components: {
          prefix: 'Prime-',
          name: undefined,
          include: '*',
          exclude: undefined
      },
      directives: {
          prefix: '',
          name: undefined,
          include: undefined,
          exclude: undefined
      },
      composables: {
          prefix: '',
          name: undefined,
          include: undefined,
          exclude: undefined
      }
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.BASE_URL || '/api'
    }
  }
})
