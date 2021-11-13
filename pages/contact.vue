<template>
  <div class="wrapper-small md:px-10">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Let's Get In Touch.</h3>
      </div>

      <div class="my-10 mx-auto text-gray-900">
        
          <form class="max-w-xl mx-auto">
                <div>
                  <span class="uppercase text-sm text-gray-600 font-bold">Name</span>
                  <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="">
                </div>
                <div class="mt-8">
                  <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                  <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text">
                </div>
                <div class="mt-8">
                  <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                  <textarea
                    class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="mt-8">
                  <button
                    class="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    components: {
      
    }
}
</script>

<style>

</style>