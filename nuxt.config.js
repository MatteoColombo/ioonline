import colors from 'vuetify/es5/util/colors'
import it from "./locales/it.json"
import en from "./locales/en.json"

export default {

  server: {
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Italian Open Online 2021',
    title: 'Italian Open Online 2021',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/preview_fb.png'
      },
    ],
    __dangerouslyDisableSanitizers: ['meta'],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/cubing-icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  render: {
    etag: false,
    static: {
      etag: false
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    locales: [{
      code: 'en',
      name: 'English'
    }, {
      code: 'it',
      name: 'Italiano'
    }],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: { en, it }
    }
  },

  env: {
    registrationOpens: process.env.REG_OPEN,
    registrationCloses: process.env.REG_CLOSE,
  },

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': process.env.PROXY_URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: "@/static/icon.png",
    },
    manifest: {
      name: "Italian Open Online 2021",
      short_name: "IO Online 21",
      display: "standalone",
      start_url: "/",
      lang: 'it',
      background_color: "#fff",
      version: "10"
    }
  },
  

  auth: {
    strategies: {
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: process.env.AUTH_URL,
          token: '/api/auth/login',
          userInfo: '/api/auth/me'
        },
        token: {
          property: 'accessToken',
          prefix: '_wca',
          type: 'Bearer',
          maxAge: 60 * 60 * 24 * 14
        },
        user: {
          property: false
        },
        logoutRedirectUri: "/",
        responseType: 'code',
        clientId: process.env.CLIENT_ID,
        scope: ['public'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        autoLogout: true
      },
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: { customProperties: true },
      dark: true,
      themes: {
        dark: {
          primary: "#ec95b9",
          accent: colors.grey.darken3,
          secondary: "#ff277e",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[id].[contenthash:10]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[id].[contenthash:10]${isModern ? '.modern' : ''}.js`,
      manifest: ({ isDev }) => isDev ? '[name].json' : '[id].[contenthash:10].json',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[id].[contenthash:10].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[id].[contenthash:10].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[id].[contenthash:10].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[id].[contenthash:10].[ext]'
    }
  }
}
