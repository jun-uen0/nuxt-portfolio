(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{307:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("625bf64c",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(307)},309:function(t,e,r){var o=r(38)(!1);o.push([t.i,".prose a{--text-opacity:1;color:#4c942c;color:rgba(76,148,44,var(--text-opacity));font-weight:600}.prose li{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}",""]),t.exports=o},327:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(54),{components:{},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,n=t.error,e.prev=1,e.next=4,r("blog",o.slug).fetch();case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n({message:"404 page not found"});case 10:return e.abrupt("return",{post:c});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}),c=(r(308),r(18)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper p-5"},[r("div",{staticClass:"text-center border-2 max-w-screen-lg mx-auto px-2 py-5 rounded-xl"},[r("h3",{staticClass:"text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold"},[t._v(" "+t._s(t.post.title))]),t._v(" "),r("h3",{staticClass:"text-sm md:text-base text-gray-600 font-semibold max-w-lg mx-auto my-3"},[t._v("Posted on : "),r("span",{staticClass:"text-gray-700"},[t._v(t._s(t.formatDate(t.post.createdAt)))])])]),t._v(" "),r("nuxt-content",{staticClass:"prose prose-lg max-w-screen-lg mx-auto px-3 my-5",attrs:{document:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);