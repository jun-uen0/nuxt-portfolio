(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(30),r(18),r(141),{data:function(){return{searchQuery:"",posts:[]}},watch:{searchQuery:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return t.posts=[],r.abrupt("return");case 3:return r.next=5,t.$content("blog").limit(6).search(e).fetch();case 5:t.posts=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(24),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-8 max-w-lg mx-auto"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-full focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search posts"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.posts.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white rounded-md border border-gray-300 overflow-hidden"},e._l(e.posts,(function(t){return r("li",{key:t.slug},[r("nuxt-link",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-primary hover:text-black",attrs:{to:t.slug}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);