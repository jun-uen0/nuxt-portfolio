import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f17a793 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1649a8e8 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _8b6e39b4 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3cb48cce = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _3ecf8258 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3d18e110 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _1f17a793,
    name: "about"
  }, {
    path: "/blog",
    component: _1649a8e8,
    name: "blog"
  }, {
    path: "/contact",
    component: _8b6e39b4,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _3cb48cce,
    name: "portfolio"
  }, {
    path: "/",
    component: _3ecf8258,
    name: "index"
  }, {
    path: "/:slug",
    component: _3d18e110,
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
