<template>
  <div>
    <nav class="wrapper py-6">
      <div class="px-10 flex justify-between items-center">
        <div class="logo">
          <nuxt-link to="/">
            <h1 class="text-2xl font-semibold text-gray-700">Jun Ueno</h1>
          </nuxt-link>
        </div>
          
        <div class="navbar hidden md:block" v-for="locale in availableLocales" :key="locale.code">
          <nuxt-link class="nav-link hover:text-primary" to="portfolio">{{ $t('portfolio') }}</nuxt-link>
          <nuxt-link class="nav-link hover:text-primary" to="blog">{{ $t('blog') }}</nuxt-link>
          <nuxt-link class="nav-link hover:text-primary" to="about">{{ $t('about') }}</nuxt-link>
          <!-- <nuxt-link class="nav-link hover:text-primary" to="contact">{{ $t('contact') }}</nuxt-link> -->
          <button @click="() => changeLocale(locale.code)" class="nav-link hover:text-primary">{{ $t(locale.name) }}</button>
        </div>

        <div class="ml-3 flex md:hidden">
          <button @click="toggle" class="flex-center rounded-md">
            <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24"
              width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24"
              width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3 bg-primary" v-for="locale in availableLocales" :key="locale.code">
        <nuxt-link to="portfolio" class="mobile-link focus:outline-none hover:text-gray-500">{{ $t('portfolio') }}
        </nuxt-link>
        <nuxt-link to="blog" class="mt-1 mobile-link focus:outline-none hover:text-gray-500">{{ $t('blog') }}
        </nuxt-link>
        <nuxt-link to="about" class="mt-1 mobile-link focus:outline-none hover:text-gray-500">{{ $t('about') }}
        </nuxt-link>
        <a
        @click="() => changeLocale(locale.code)"
        class="mt-1 mobile-link focus:outline-none hover:text-gray-500">
          {{ $t(locale.name) }}
        </a>
        <!-- <nuxt-link to="contact" class="mt-1 mobile-link focus:outline-none hover:text-gray-500">Contact
        </nuxt-link> -->
      </div>
    </div>

  </div>
</template>


<script>

  export default {
    computed: {
      availableLocales() {
        return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
      },
    },
    components:{
      
    },

    data() {
      return {
        isOpen: false
      }
    },

    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      },
      async changeLocale(locale) {
        await this.$i18n.setLocale(locale)
      }
    }
  }
</script>

<style>
    .mobile-link{
      @apply block px-3 py-2 text-lg text-gray-900 rounded-md text-white font-medium text-center;
    }

    .nav-link{
      @apply ml-12 font-medium text-lg text-gray-700;
    }
    .nuxt-link-exact-active {
      @apply text-primary;
    }
</style>
