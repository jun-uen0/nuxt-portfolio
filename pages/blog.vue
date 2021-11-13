<template>
  <div class="wrapper-small">
    <div class="text-center mt-2 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Welcome to my blog.</h3>
    </div>
    <Search />
    <div class="my-10 bg-gray-100 p-4 md:p-6 rounded-xl shadow-md" v-for="post of posts" :key="post.slug">
      <div class="flex justify-between items-center">
        <span class="font-semibold text-gray-600 text-sm">{{ formatDate(post.createdAt) }}</span>
        <span class="px-3 py-1 bg-gray-600 text-white text-sm font-bold rounded">{{ post.tag }}</span>
      </div>

      <div class="mt-2">
        <nuxt-link :to="post.slug"
          class="text-xl md:text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline">{{ post.title }}
        </nuxt-link>
        <p class="mt-2 text-base lg:text-lg text-gray-700">{{ post.description }}</p>
      </div>

      <div class=" mt-4">
        <nuxt-link :to="post.slug" class="text-primary font-semibold hover:underline">Read more</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
export default {
  components:{
    Search
  },
  methods:{
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },


   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>

<style>

</style>