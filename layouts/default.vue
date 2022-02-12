<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="">
      <Header />
    </div>
    <div class="mb-auto">
      <Nuxt />
    </div>
    <div class="h-10">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thisYear: '2022',
      myName: 'Jun Ueno'
    }
  }
}
</script>

<style>
  .wrapper{
    @apply max-w-screen-xl mx-auto;
  }

  .wrapper-small{
    @apply max-w-screen-lg mx-auto px-6;
  }

  .flex-center{
    @apply flex justify-center items-center;
  }
</style>
