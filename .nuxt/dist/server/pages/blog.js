exports.ids = [9,4];
exports.modules = {

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Search.vue?vue&type=template&id=3a8f2c5c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my-8 max-w-lg mx-auto"},[_vm._ssrNode("<input type=\"search\" autocomplete=\"off\" placeholder=\"Search posts\""+(_vm._ssrAttr("value",(_vm.searchQuery)))+" class=\"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-full focus:outline-none focus:bg-white bg-white\"> "),(_vm.posts.length)?_vm._ssrNode("<ul class=\"z-10 absolute w-auto flex-1 top-40 bg-white rounded-md border border-gray-300 overflow-hidden\">","</ul>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-primary hover:text-black",attrs:{"to":post.slug}},[_vm._v("\n        "+_vm._s(post.title)+"\n      ")])],1)}),0):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Search.vue?vue&type=template&id=3a8f2c5c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Search.vue?vue&type=script&lang=js&
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
  "e937be92"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=template&id=395d0f22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper-small"},[_vm._ssrNode("<div class=\"text-center mt-2 border-b-2 pb-3\"><h3 class=\"text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.$t('blog')))+"</h3></div> "),_c('Search'),_vm._ssrNode(" "),_vm._l((_vm.posts),function(post){return _vm._ssrNode("<div class=\"my-10 bg-gray-100 p-4 md:p-6 rounded-xl shadow-md\">","</div>",[_vm._ssrNode("<div class=\"flex justify-between items-center\"><span class=\"font-semibold text-gray-600 text-sm\">"+_vm._ssrEscape(_vm._s(_vm.formatDate(post.date)))+"</span> <span class=\"px-3 py-1 bg-gray-600 text-white text-sm font-bold rounded\">"+_vm._ssrEscape(_vm._s(post.tag))+"</span></div> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-xl md:text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline",attrs:{"to":'/' + post.slug}},[_vm._v(_vm._s(post.title)+"\n      ")]),_vm._ssrNode(" <p class=\"mt-2 text-base lg:text-lg text-gray-700\">"+_vm._ssrEscape(_vm._s(post.description))+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\" mt-4\">","</div>",[_c('nuxt-link',{staticClass:"text-primary font-semibold hover:underline",attrs:{"to":'/' + post.slug}},[_vm._v(_vm._s(_vm.$t('read-more')))])],1)],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog.vue?vue&type=template&id=395d0f22&

// EXTERNAL MODULE: ./components/Search.vue + 4 modules
var Search = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  components: {
    Search: Search["default"]
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('en', options);
    }

  },

  async asyncData({
    $content
  }) {
    let posts = await $content("blog").fetch();
    posts.sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });
    return {
      posts
    };
  }

});
// CONCATENATED MODULE: ./pages/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7a6da5b2"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Search: __webpack_require__(79).default})


/***/ })

};;
//# sourceMappingURL=blog.js.map