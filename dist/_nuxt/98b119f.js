(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,e,o){"use strict";o.r(e);var n={},r=(o(257),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper text-center"},[o("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://github.com/jun-uen0",target:"_blank","aria-label":"Github"}},[o("i",{staticClass:"bx bxl-github"})]),t._v(" "),o("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://gitlab.com/jun-uen0",target:"_blank","aria-label":"Gitlab"}},[o("i",{staticClass:"bx bxl-gitlab"})]),t._v(" "),o("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://twitter.com/home",target:"_blank","aria-label":"Twitter"}},[o("i",{staticClass:"bx bxl-twitter"})]),t._v(" "),o("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://www.linkedin.com/in/jun-uen0/",target:"_blank","aria-label":"LinkedIn"}},[o("i",{staticClass:"bx bxl-linkedin-square"})])])}],!1,null,null,null);e.default=component.exports},173:function(t,e,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("fe3d1842",content,!0,{sourceMap:!1})},174:function(t,e,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("008470c0",content,!0,{sourceMap:!1})},175:function(t,e,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("1bbc9cc0",content,!0,{sourceMap:!1})},199:function(t){t.exports=JSON.parse('{"ja":"日本語","hello":"Hello, I am jun","developer":"I am a Web Software Developer","work":"I build websites and web apps","situation":"One of my dreams is to become a blockchain developer. Work hard, study hard.","see":"See Project","code":"Source Code","my-project":"Featured Projects","techstacks":"Tech Stacks I use ","read-more":"Read more","portfolio":"Portfolio","blog":"Blog","contact":"Contact","about":{"title":"About me","name":"Jun Ueno","description":"Love camping, programming. I’m currently open to a new job opportunely. My favorite language is JavaScript, and frame-work is Vue.js/Nuxt.js. Also, I am a big fan of blockchain technology. My gaol as a web developer is becoming a blockchain developer. Backend-dev is for Laravel/PHP <3"},"project":{"gas":{"title":"Free Translate Web API using Google Apps Script","description":"Nowadays, you can translate text files into any language. GCP, Bing Microsoft Translator, and so on. However, it costs a lot. You can use them freely until the limit. Although, someone figured out that you can use GCP translate for free. Google Apps Script has its original methods to use Google API, such as Maps API, YouTube API, and Translate API. They are all free. Each method has limitations. It would just stop. You don\'t need to register your credit card. In this project, you can create your own translate web API. See source code and try it."},"videochat":{"title":"Video chat app (Text and Translate)","description":"I created a video app that interprets a speaker\'s language into the listener\'s language. It\'s using Google Cloud Translate, but it\'s completely free. It\'s because I use Google Translate App as one of the Backend systems that translates the text."},"smartcontract":{"title":"Smart Contract App using Nuxt.js","description":"You can make a smart contract with Ethereum and connect to your Metamask account. The framework is Nuxt.js. You can create your own chian with AWS."},"example":{"title":"","description":""}}}')},204:function(t,e,o){"use strict";o(253);var n=o(24),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col h-screen justify-between"},[o("div",{},[o("Header")],1),t._v(" "),o("div",{staticClass:"mb-auto"},[o("Nuxt")],1),t._v(" "),o("div",{staticClass:"h-10"},[o("Footer")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:o(307).default,Footer:o(308).default})},207:function(t,e,o){o(208),t.exports=o(209)},253:function(t,e,o){"use strict";o(173)},254:function(t,e,o){var n=o(52)(!1);n.push([t.i,".wrapper{max-width:1280px}.wrapper,.wrapper-small{margin-left:auto;margin-right:auto}.wrapper-small{max-width:1024px;padding-left:1.5rem;padding-right:1.5rem}.flex-center{display:flex;justify-content:center;align-items:center}",""]),t.exports=n},255:function(t,e,o){"use strict";o(174)},256:function(t,e,o){var n=o(52)(!1);n.push([t.i,".mobile-link{display:block;padding:.5rem .75rem;color:#1a202c;color:rgba(26,32,44,var(--text-opacity));border-radius:.375rem;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.mobile-link,.nav-link{font-size:1.125rem;--text-opacity:1;font-weight:500}.nav-link{margin-left:3rem;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.nuxt-link-exact-active{--text-opacity:1;color:#4c942c;color:rgba(76,148,44,var(--text-opacity))}",""]),t.exports=n},257:function(t,e,o){"use strict";o(175)},258:function(t,e,o){var n=o(52)(!1);n.push([t.i,".social-link{margin-left:.75rem;margin-right:.75rem;font-size:1.5rem;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}",""]),t.exports=n},307:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(30),o(15),o(5),{computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},components:{},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},changeLocale:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.$i18n.setLocale(t);case 2:case"end":return o.stop()}}),o)})))()}}}),l=(o(255),o(24)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{staticClass:"wrapper py-6"},[o("div",{staticClass:"px-10 flex justify-between items-center"},[o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[o("h1",{staticClass:"text-2xl font-semibold text-gray-700"},[t._v("Jun Ueno")])])],1),t._v(" "),t._l(t.availableLocales,(function(e){return o("div",{key:e.code,staticClass:"navbar hidden md:block"},[o("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"portfolio"}},[t._v(t._s(t.$t("portfolio")))]),t._v(" "),o("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"blog"}},[t._v(t._s(t.$t("blog")))]),t._v(" "),o("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"about"}},[t._v(t._s(t.$t("about.title")))]),t._v(" "),o("button",{staticClass:"nav-link hover:text-primary",on:{click:function(){return t.changeLocale(e.code)}}},[t._v(t._s(t.$t(e.name)))])],1)})),t._v(" "),o("div",{staticClass:"ml-3 flex md:hidden"},[o("button",{staticClass:"flex-center rounded-md",on:{click:t.toggle}},[o("svg",{class:[t.isOpen?"hidden":"block","h-6 w-6"],attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),o("svg",{class:[t.isOpen?"block":"hidden","h-6 w-6"],attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24",height:"24"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])],2)]),t._v(" "),o("div",{class:[t.isOpen?"":"hidden","md:hidden"]},t._l(t.availableLocales,(function(e){return o("div",{key:e.code,staticClass:"px-2 pt-2 pb-3 sm:px-3 bg-primary"},[o("nuxt-link",{staticClass:"mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"portfolio"}},[t._v(t._s(t.$t("portfolio"))+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"blog"}},[t._v(t._s(t.$t("blog"))+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"about"}},[t._v(t._s(t.$t("about"))+"\n      ")]),t._v(" "),o("a",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",on:{click:function(){return t.changeLocale(e.code)}}},[t._v("\n        "+t._s(t.$t(e.name))+"\n      ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,o){"use strict";o.r(e);var n={components:{Social:o(107).default},data:function(){return{thisYear:"2022"}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper mx-auto px-10"},[o("hr",{staticClass:"h-px mt-6 border-gray-300 max-w-screen-xl mx-auto"}),t._v(" "),o("div",{staticClass:"md:py-10"},[o("div",{staticClass:"flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"},[o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[o("h1",{staticClass:"text-xl font-semibold text-gray-700"},[t._v("Jun Ueno")])])],1),t._v(" "),o("div",{staticClass:"my-5 md:my-0 order-last md:order-none text-center"},[o("p",{staticClass:"text-lg font-semibold text-gray-600"},[t._v("© "+t._s(t.thisYear)+" Jun Ueno - All rights reserved.")])]),t._v(" "),o("div",[o("Social")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Social:o(107).default})}},[[207,14,1,15]]]);