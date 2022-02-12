<template>
  <div class="wrapper-small text-left md:px-10">

    <div class="text-center mt-2 border-b-2 pb-3">
    <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">{{ $t('about.title') }}</h3>
    </div>

    <div class="project-card md:flex mt-8">
        <div class="img max-w-lg md:max-w-sm  mx-auto">
      <img class="object-contain rounded-xl" src="/profile-img.png" />
        </div>
        <div class="flex flex-col justify-between max-w-lg mx-auto">
          <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">{{ $t('about.name') }}</h2>
          <p class="text-base text-gray-700 my-3">{{ $t('about.description') }}</p>
          </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {å

}
</script>

<style>

</style>