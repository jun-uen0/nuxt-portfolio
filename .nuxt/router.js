import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _157cca4b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _706ad1d4 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _a81f9044 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _61d99386 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _3534a510 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _337e03c8 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

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

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
