(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var l={},r=(n(269),n(18)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper text-center"},[n("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://github.com/jun-uen0",target:"_blank","aria-label":"Github"}},[n("i",{staticClass:"bx bxl-github"})]),t._v(" "),n("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://twitter.com/home",target:"_blank","aria-label":"Twitter"}},[n("i",{staticClass:"bx bxl-twitter"})]),t._v(" "),n("a",{staticClass:"social-link hover:text-primary",attrs:{href:"https://www.linkedin.com/in/jun-uen0/",target:"_blank","aria-label":"LinkedIn"}},[n("i",{staticClass:"bx bxl-linkedin-square"})])])}],!1,null,null,null);e.default=component.exports},175:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("56b15182",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("257af960",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("40b32560",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(265);var l=n(18),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-screen justify-between"},[n("div",{},[n("Header")],1),t._v(" "),n("div",{staticClass:"mb-auto"},[n("Nuxt")],1),t._v(" "),n("div",{staticClass:"h-10"},[n("Footer")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(298).default,Footer:n(299).default})},206:function(t,e,n){n(207),t.exports=n(208)},265:function(t,e,n){"use strict";n(175)},266:function(t,e,n){var l=n(38)(!1);l.push([t.i,".wrapper{max-width:1280px}.wrapper,.wrapper-small{margin-left:auto;margin-right:auto}.wrapper-small{max-width:1024px;padding-left:1.5rem;padding-right:1.5rem}.flex-center{display:flex;justify-content:center;align-items:center}",""]),t.exports=l},267:function(t,e,n){"use strict";n(176)},268:function(t,e,n){var l=n(38)(!1);l.push([t.i,".mobile-link{display:block;padding:.5rem .75rem;color:#1a202c;color:rgba(26,32,44,var(--text-opacity));border-radius:.375rem;color:#fff;color:rgba(255,255,255,var(--text-opacity));text-align:center}.mobile-link,.nav-link{font-size:1.125rem;--text-opacity:1;font-weight:500}.nav-link{margin-left:3rem;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.nuxt-link-exact-active{--text-opacity:1;color:#4c942c;color:rgba(76,148,44,var(--text-opacity))}",""]),t.exports=l},269:function(t,e,n){"use strict";n(177)},270:function(t,e,n){var l=n(38)(!1);l.push([t.i,".social-link{margin-left:.75rem;margin-right:.75rem;font-size:1.5rem;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}",""]),t.exports=l},298:function(t,e,n){"use strict";n.r(e);var l={components:{},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}}},r=(n(267),n(18)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"wrapper py-6"},[n("div",{staticClass:"px-10 flex justify-between items-center"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[n("h1",{staticClass:"text-2xl font-semibold text-gray-700"},[n("span",{staticClass:"text-primary font-bold"},[t._v("Portfolio")]),t._v(" Jun Ueno")])])],1),t._v(" "),n("div",{staticClass:"navbar hidden md:block"},[n("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"portfolio"}},[t._v("Portfolio")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"blog"}},[t._v("Blog")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"about"}},[t._v("About")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link hover:text-primary",attrs:{to:"contact"}},[t._v("Contact")])],1),t._v(" "),n("div",{staticClass:"ml-3 flex md:hidden"},[n("button",{staticClass:"flex-center rounded-md",on:{click:t.toggle}},[n("svg",{class:[t.isOpen?"hidden":"block","h-6 w-6"],attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),n("svg",{class:[t.isOpen?"block":"hidden","h-6 w-6"],attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),n("div",{class:[t.isOpen?"":"hidden","md:hidden"]},[n("div",{staticClass:"px-2 pt-2 pb-3 sm:px-3 bg-primary"},[n("nuxt-link",{staticClass:"mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"portfolio"}},[t._v("Projects\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"blog"}},[t._v("Blog\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"about"}},[t._v("About\n          ")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"contact"}},[t._v("\n            Contact")]),t._v(" "),n("nuxt-link",{staticClass:"mt-1 mobile-link focus:outline-none hover:text-gray-500",attrs:{to:"credits"}},[t._v("\n            Credits")])],1)])])}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,n){"use strict";n.r(e);var l={components:{Social:n(110).default}},r=n(18),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper mx-auto px-10"},[n("hr",{staticClass:"h-px mt-6 border-gray-300 max-w-screen-xl mx-auto"}),t._v(" "),n("div",{staticClass:"md:py-10"},[n("div",{staticClass:"flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[n("h1",{staticClass:"text-xl font-semibold text-gray-700"},[n("span",{staticClass:"text-primary font-bold"},[t._v("Jun Ueno")]),t._v(" Portfolio")])])],1),t._v(" "),t._m(0),t._v(" "),n("div",[n("Social")],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-5 md:my-0 order-last md:order-none text-center"},[n("p",{staticClass:"text-lg font-semibold text-gray-600"},[t._v("© 2021 Jun Ueno - All rights reserved.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Social:n(110).default})}},[[206,12,1,13]]]);