exports.ids = [3];
exports.modules = {

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Search.vue?vue&type=template&id=3a8f2c5c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my-8 max-w-lg mx-auto"},[_vm._ssrNode("<input type=\"search\" autocomplete=\"off\" placeholder=\"Search posts\""+(_vm._ssrAttr("value",(_vm.searchQuery)))+" class=\"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-full focus:outline-none focus:bg-white bg-white\"> "),(_vm.posts.length)?_vm._ssrNode("<ul class=\"z-10 absolute w-auto flex-1 top-40 bg-white rounded-md border border-gray-300 overflow-hidden\">","</ul>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-primary hover:text-black",attrs:{"to":post.slug}},[_vm._v("\n        "+_vm._s(post.title)+"\n      ")])],1)}),0):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Search.vue?vue&type=template&id=3a8f2c5c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  data() {
    return {
      searchQuery: '',
      posts: []
    };
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.posts = [];
        return;
      }

      this.posts = await this.$content("blog").limit(6).search(searchQuery).fetch();
    }

  }
});
// CONCATENATED MODULE: ./components/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6dccbe75"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map