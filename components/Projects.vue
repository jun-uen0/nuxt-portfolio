<template>
  <div class="wrapper-small my-5">

		<div class="project-card md:flex mt-8">
				<div class="img max-w-lg md:max-w-sm  mx-auto">
					<img src="~/assets/project-img-2.png" class="rounded-xl" alt="">
				</div>
				<div class="flex flex-col justify-between max-w-lg mx-auto">
					<div class="txt md:px-5 lg:px-0">
					<h2 class="text-xl font-semibold text-gray-800">{{ $t('project.gas.title') }}</h2>
					<p class="text-base text-gray-700 my-3">{{ $t('project.gas.description') }}</p>
					</div>
				<div>
					<div class="md:px-5 lg:px-0 py-3">
						<a href="https://script.google.com/d/1Si-r4fWsbnq_ltFKlU9dbLxLLJOUtEs8JW51vYUtsupcOhgXjySQbFQt/edit?usp=sharing" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-gray-200 font-semibold rounded-full">{{ $t('see') }}</a>
						<a href="https://github.com/jun-uen0/appsScript-free-translation" target="_blank" class="ml-6 text-indigo-600 hover:underline">{{ $t('code') }}</a>
					</div>
				</div>
			</div>
		</div>

		<div class="project-card md:flex mt-16">
				<div class="img max-w-lg md:max-w-sm  mx-auto">
				<img src="~/assets/project-img-3.png" class="rounded-xl" alt="">
				</div>
				<div class="flex flex-col justify-between max-w-lg mx-auto">
					<div class="txt md:px-5 lg:px-0">
					<h2 class="text-xl font-semibold text-gray-800">{{ $t('project.videochat.title') }}</h2>
					<p class="text-base text-gray-700 my-3">{{ $t('project.videochat.description') }}</p> 
				</div>
				<div>
					<div class="md:px-5 lg:px-0 py-3">
						<a href="https://video-chat-subtitle.firebaseapp.com/main.html" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-gray-200 font-semibold rounded-full">{{ $t('see') }}</a>
						<a href="https://github.com/jun-uen0/react-interpreter-video-app/" target="_blank" class="ml-6 text-indigo-600 hover:underline">{{ $t('code') }}</a>
					</div>
				</div>
			</div>
		</div>
		
		<div class="project-card md:flex mt-16">
				<div class="img max-w-lg md:max-w-sm  mx-auto">
				<img src="~/assets/project-img-5.png" class="rounded-xl" alt="">
				</div>
				<div class="flex flex-col justify-between max-w-lg mx-auto">
					<div class="txt md:px-5 lg:px-0">
					<h2 class="text-xl font-semibold text-gray-800">{{ $t('project.smartcontract.title') }}</h2>
					<p class="text-base text-gray-700 my-3">{{ $t('project.smartcontract.description') }}</p> 
				</div>
				<div>
					<div class="md:px-5 lg:px-0 py-3">
						<a href="https://nuxt-blockchain.pages.dev/" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-gray-200 font-semibold rounded-full">{{ $t('see') }}</a>
						<a href="https://github.com/jun-uen0/nuxt-blockchain" target="_blank" class="ml-6 text-indigo-600 hover:underline">{{ $t('code') }}</a>
					</div>
				</div>
			</div>
		</div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>