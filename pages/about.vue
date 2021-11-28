<template>
  <div class="wrapper-small text-left md:px-10">

      <div class="text-center mt-2 border-b-2 pb-3">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">{{ $t('about') }}</h3>
      </div>

      <div class="flex mt-6 invisible md:visible">
        <div class="w-1/2 flex justify-center mr-2">
          <img class="object-contain" src="/profile-img.png" />
        </div>

        <div class="w-1/2 ml-2">
          <p class="text-base md:text-lg font-medium text-gray-700">
            最近キャンプを始めた見習いWebエンジニア。
            都内のプログラミングスクールを卒業し、現在就職活動中。<br/><br/>
            得意な言語はJavaScript。<br/>フレームワークはVue.jsとNuxt.js。<br/><br/>
            ブロックチェーンに興味があり、将来ブロックチェーンの事業開発にも携わることができるようなフルスタックエンジニアを目指して勉強/活動中。<br/><br/>
            ここでは自分のプロジェクトや技術ブログを更新していきます。
          </p>
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