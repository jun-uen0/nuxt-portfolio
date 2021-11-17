export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Introduction = () => import('../../components/Introduction.vue' /* webpackChunkName: "components/introduction" */).then(c => wrapFunctional(c.default || c))
export const Projects = () => import('../../components/Projects.vue' /* webpackChunkName: "components/projects" */).then(c => wrapFunctional(c.default || c))
export const Search = () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const Social = () => import('../../components/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const TechStack = () => import('../../components/TechStack.vue' /* webpackChunkName: "components/tech-stack" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
