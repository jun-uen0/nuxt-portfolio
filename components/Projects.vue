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
					<ButtonSeeProjectAndCode />
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
					<ButtonSeeProjectAndCode />
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
					<ButtonSeeProjectAndCode />
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