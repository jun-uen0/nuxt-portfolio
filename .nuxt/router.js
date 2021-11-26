import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _157cca4b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _706ad1d4 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _a81f9044 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _61d99386 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _3534a510 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _337e03c8 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _157cca4b,
    name: "about"
  }, {
    path: "/blog",
    component: _706ad1d4,
    name: "blog"
  }, {
    path: "/contact",
    component: _a81f9044,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _61d99386,
    name: "portfolio"
  }, {
    path: "/",
    component: _3534a510,
    name: "index"
  }, {
    path: "/:slug",
    component: _337e03c8,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
