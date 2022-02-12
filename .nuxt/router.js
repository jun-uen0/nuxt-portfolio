import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _787682fe = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a04f0244 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _2fe812d8 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _06007cbc = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _3906cd74 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3c741004 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _787682fe,
    name: "about"
  }, {
    path: "/blog",
    component: _a04f0244,
    name: "blog"
  }, {
    path: "/contact",
    component: _2fe812d8,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _06007cbc,
    name: "portfolio"
  }, {
    path: "/",
    component: _3906cd74,
    name: "index"
  }, {
    path: "/:slug",
    component: _3c741004,
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
