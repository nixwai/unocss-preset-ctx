import{_ as n,c as s,o as b,j as c,ae as r,d as o,p as l,n as d}from"./framework.Cx2_j5cd.js";const Y=`<template>\r
  <div class="flex ctx-c-test_blue-500/50 ctx-deg-test-700 ctx-c-bg_ctx-c-test-400 ctx-c-txt_ctx-c-test dark:ctx-r-y">\r
    <div class="c-ctx-c-txt ctx-deg-txt_ctx-deg-test-800 px-2 bg-ctx-c-bg ctx-deg-bg_ctx-deg-test-300">\r
      test1\r
    </div>\r
    <div class="c-ctx-c-txt px-2 ctx-op-txt_ctx-op-test-150 bg-ctx-c-bg-500/50">\r
      test2\r
    </div>\r
  </div>\r
</template>\r
`,u={},p={class:"flex ctx-c-test_blue-500/50 ctx-deg-test-700 ctx-c-bg_ctx-c-test-400 ctx-c-txt_ctx-c-test dark:ctx-r-y"};function v(a,t){return b(),s("div",p,t[0]||(t[0]=[c("div",{class:"c-ctx-c-txt ctx-deg-txt_ctx-deg-test-800 px-2 bg-ctx-c-bg ctx-deg-bg_ctx-deg-test-300"}," test1 ",-1),c("div",{class:"c-ctx-c-txt px-2 ctx-op-txt_ctx-op-test-150 bg-ctx-c-bg-500/50"}," test2 ",-1)]))}const J=n(u,[["render",v]]),j=`<template>\r
  <div class="flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300">\r
    <div class="ctxs-dom">\r
      light\r
    </div>\r
    <div class="ctxs-dom ctx-r-y">\r
      dark\r
    </div>\r
  </div>\r
</template>\r
`,i={},m={class:"flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300"};function g(a,t){return b(),s("div",m,t[0]||(t[0]=[c("div",{class:"ctxs-dom"}," light ",-1),c("div",{class:"ctxs-dom ctx-r-y"}," dark ",-1)]))}const k=n(i,[["render",g]]),E=`<template>\r
  <div class="flex ctx-c-btn_red-400">\r
    <button class="bg-ctx-c-btn-600">\r
      button\r
    </button>\r
    <div class="ctx-deg-btn-800">\r
      <button class="bg-ctx-c-btn">\r
        button\r
      </button>\r
      <button class="bg-ctx-c-btn-500">\r
        button\r
      </button>\r
    </div>\r
  </div>\r
</template>\r
\r
<style scoped>\r
button {\r
  color: white;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  margin: 0 4px;\r
}\r
</style>\r
`,_={},V={class:"flex ctx-c-btn_red-400"};function W(a,t){return b(),s("div",V,t[0]||(t[0]=[c("button",{class:"bg-ctx-c-btn-600"}," button ",-1),c("div",{class:"ctx-deg-btn-800"},[c("button",{class:"bg-ctx-c-btn"}," button "),c("button",{class:"bg-ctx-c-btn-500"}," button ")],-1)]))}const q=n(_,[["render",W],["__scopeId","data-v-0ee913a0"]]),y=`<template>\r
  <div class="flex ctx-c-btn_red/80">\r
    <button class="bg-ctx-c-btn">\r
      button\r
    </button>\r
    <div class="ctx-op-btn-60">\r
      <button class="bg-ctx-c-btn">\r
        button\r
      </button>\r
      <button class="bg-ctx-c-btn/40">\r
        button\r
      </button>\r
      <button class="bg-ctx-c-btn/40 bg-op-20">\r
        button\r
      </button>\r
    </div>\r
  </div>\r
</template>\r
\r
<style scoped>\r
button {\r
  color: white;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  margin: 0 4px;\r
}\r
</style>\r
`,f={},N={class:"flex ctx-c-btn_red/80"};function C(a,t){return b(),s("div",N,t[0]||(t[0]=[r('<button class="bg-ctx-c-btn" data-v-9f99e737> button </button><div class="ctx-op-btn-60" data-v-9f99e737><button class="bg-ctx-c-btn" data-v-9f99e737> button </button><button class="bg-ctx-c-btn/40" data-v-9f99e737> button </button><button class="bg-ctx-c-btn/40 bg-op-20" data-v-9f99e737> button </button></div>',2)]))}const Q=n(f,[["render",C],["__scopeId","data-v-9f99e737"]]),T=`<script setup lang="ts">\r
import { ref } from 'vue';\r
\r
const v = ref(true);\r
function handleClick() {\r
  v.value = !v.value;\r
}\r
<\/script>\r
\r
<template>\r
  <div\r
    :class="[\r
      v ? 'ctx-c-btn_red' : 'ctx-c-btn_blue',\r
      v ? 'ctx-c-txt_gray-300' : 'ctx-c-txt_[#ECA9FF]',\r
    ]"\r
    @click="handleClick"\r
  >\r
    <button class="bg-ctx-c-btn">\r
      <span class="c-ctx-c-txt">button</span>\r
    </button>\r
    <button class="bg-ctx-c-btn-100">\r
      <span class="c-ctx-c-txt-600">button</span>\r
    </button>\r
    <button class="bg-ctx-c-btn-300">\r
      <span class="c-ctx-c-txt-550">button</span>\r
    </button>\r
    <button class="bg-ctx-c-btn-500">\r
      <span class="c-ctx-c-txt-500">button</span>\r
    </button>\r
    <button class="bg-ctx-c-btn-700">\r
      <span class="c-ctx-c-txt-450">button</span>\r
    </button>\r
    <button class="bg-ctx-c-btn-900">\r
      <span class="c-ctx-c-txt-400">button</span>\r
    </button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
button {\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  margin: 0 4px;\r
}\r
</style>\r
`,H=o({__name:"base",setup(a){const t=l(!0);function x(){t.value=!t.value}return(L,e)=>(b(),s("div",{class:d([t.value?"ctx-c-btn_red":"ctx-c-btn_blue",t.value?"ctx-c-txt_gray-300":"ctx-c-txt_[#ECA9FF]"]),onClick:x},e[0]||(e[0]=[r('<button class="bg-ctx-c-btn" data-v-c72cce89><span class="c-ctx-c-txt" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-100" data-v-c72cce89><span class="c-ctx-c-txt-600" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-300" data-v-c72cce89><span class="c-ctx-c-txt-550" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-500" data-v-c72cce89><span class="c-ctx-c-txt-500" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-700" data-v-c72cce89><span class="c-ctx-c-txt-450" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-900" data-v-c72cce89><span class="c-ctx-c-txt-400" data-v-c72cce89>button</span></button>',6)]),2))}}),w=n(H,[["__scopeId","data-v-c72cce89"]]);export{T,w as a,y as b,Q as c,E as d,q as e,j as f,k as g,Y as h,J as i};
