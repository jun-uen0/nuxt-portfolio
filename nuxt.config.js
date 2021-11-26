export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jun Ueno',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'boxicons/css/boxicons.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        // 使用する言語
        locales: [
          { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
          { code: 'en', name: '英語', iso: 'en-US', file: 'en.json' },
        ],
        defaultLocale: 'en', // デフォルトの言語
        langDir: 'locales/', // 翻訳ファイルのディレクトリパス
        strategy: 'no_prefix', // URLに言語のプレフィックスを追加するかの指定
        vueI18n: {
          // 翻訳ファイルが見つからなかった場合の言語を指定
          fallbackLocale: 'en',
        },
        vueI18nLoader: true,
        lazy: true, // 遅延読み込みの有効化
      },
    ],
    ['nuxt-mail', {
      message: {
        to: 'hello@jaysan.io',
      },
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'username',
          pass: 'password'
        },
      },
    }],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
