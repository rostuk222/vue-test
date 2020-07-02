module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test dashboard project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: "https://api.quwi.com/v2/"
  },

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: '/projects'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "data.token",
          },
          logout: {
            url: "auth/logout",
            method: "post",
            propertyName: "data.token",
          },
          user: false,
        },
        autoFetchUser: false
      },
    }
  },

  plugins: [
    '~/plugins/axios'
  ]
}

