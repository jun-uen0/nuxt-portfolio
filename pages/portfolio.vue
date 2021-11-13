<template>
  <div class="wrapper-small md:px-10">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">My Recent Work.</h3>
      </div>

      <div>
        <Projects />
      </div>
  </div>
</template>

<script>
import Projects from '../components/Projects.vue'
export default {
    components:{
      Projects
    }
}
</script>

<style>

</style>