import colors from 'vuetify/es5/util/colors'
import it from "./locales/it.json"
import en from "./locales/en.json"

export default {

  server: {
    host: '0.0.0.0' // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Italian Open Online 2021',
    title: 'Italian Open Online 2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    //'@nuxtjs/pwa',
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
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, it }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl:"http://localhost:4200/api"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     name: "Italian Open Online 2021",
  //     short_name: "IO Online 21",
  //     start_url:"/",
  //     lang: 'en',
  //     background_color:"#00aa82",
  //   }
  // },

  auth: {
    strategies: {
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://worldcubeassociation.org/oauth/authorize',
          token: 'https://worldcubeassociation.org/oauth/token',
          userInfo: 'https://worldcubeassociation.org/api/v0/me',
          logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'token',
        grantType: 'authorization_code',
        accessType: undefined,
        redirectUri: undefined,
        logoutRedirectUri: undefined,
        clientId: 'SET_ME',
        scope: [],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      }
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
          primary: "#00aa82",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
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
  }
}
