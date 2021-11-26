import locale9ec66352 from '../../locales/en.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: true,
  locales: [{"code":"ja","name":"Japanese","iso":"ja_JP","file":"ja.json"},{"code":"en","name":"英語","iso":"en-US","file":"en.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "/Volumes/Macintosh HD - Data/Users/jumpeismacbookpro2.0/Documents/dev/nuxt-portfolio/locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"ja","name":"Japanese","iso":"ja_JP","file":"ja.json"},{"code":"en","name":"英語","iso":"en-US","file":"en.json"}],
  localeCodes: ["ja","en"],
}

export const localeMessages = {
  'en.json': () => Promise.resolve(locale9ec66352),
  'ja.json': () => import('../../locales/ja.json' /* webpackChunkName: "lang-ja.json" */),
}
