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
    // "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    // "primevue/resources/themes/lara-light-green/theme.css",
    // "primeicons/primeicons.css"
  ],
  googleFonts: {
    families: {
      Rubik: true,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  modules: [
    'nuxt-primevue','@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', "@hebilicious/vue-query-nuxt"
  ],
  primevue: {
      usePrimeVue: true,
      options: {
        ripple: true,
      },
      importPT: undefined,
      // cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
      components: {
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
  // plugins: [
  //   "@/plugins/vue-query.ts",
  // ],
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.BASE_URL || '/api'
    }
  }
})
