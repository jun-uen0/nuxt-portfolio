export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Introduction } from '../../components/Introduction.vue'
export { default as Projects } from '../../components/Projects.vue'
export { default as Search } from '../../components/Search.vue'
export { default as Social } from '../../components/Social.vue'
export { default as TechStack } from '../../components/TechStack.vue'
export { default as ButtonSeeProjectAndCode } from '../../components/Button/SeeProjectAndCode.vue'

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
