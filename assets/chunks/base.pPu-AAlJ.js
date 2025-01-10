import{_ as n,o as s,c as b,j as c,a0 as x,d as o,p as u,n as l}from"./framework.BFGFFC7y.js";const h=`<template>\r
  <div class="flex ctx-c-test_blue-500 ctx-l-test-700 ctx-op-test-50 ctx-c-bg_ctx-c-test-400 ctx-c-txt_ctx-c-test dark:ctx-r-y">\r
    <div class="c-ctx-c-txt ctx-l-txt_ctx-l-test-800 px-2 bg-ctx-c-bg ctx-l-bg_ctx-l-test-300">\r
      test1\r
    </div>\r
    <div class="c-ctx-c-txt px-2 ctx-op-txt_ctx-op-test-150 bg-ctx-c-bg-500/50">\r
      test2\r
    </div>\r
  </div>\r
</template>\r
`,d={},X={class:"flex ctx-c-test_blue-500 ctx-l-test-700 ctx-op-test-50 ctx-c-bg_ctx-c-test-400 ctx-c-txt_ctx-c-test dark:ctx-r-y"};function p(a,t){return s(),b("div",X,t[0]||(t[0]=[c("div",{class:"c-ctx-c-txt ctx-l-txt_ctx-l-test-800 px-2 bg-ctx-c-bg ctx-l-bg_ctx-l-test-300"}," test1 ",-1),c("div",{class:"c-ctx-c-txt px-2 ctx-op-txt_ctx-op-test-150 bg-ctx-c-bg-500/50"}," test2 ",-1)]))}const C=n(d,[["render",p]]),L=`<template>\r
  <div class="flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300">\r
    <div class="ctxs-dom">\r
      light\r
    </div>\r
    <div class="ctxs-dom ctx-r-y">\r
      dark\r
    </div>\r
  </div>\r
</template>\r
`,v={},i={class:"flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300"};function m(a,t){return s(),b("div",i,t[0]||(t[0]=[c("div",{class:"ctxs-dom"}," light ",-1),c("div",{class:"ctxs-dom ctx-r-y"}," dark ",-1)]))}const M=n(v,[["render",m]]),W=`<template>\r
  <div class="flex ctx-c-btn_red-400">\r
    <button class="bg-ctx-c-btn-600">\r
      button\r
    </button>\r
    <div class="ctx-l-btn-800">\r
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
`,Z={},_={class:"flex ctx-c-btn_red-400"};function R(a,t){return s(),b("div",_,t[0]||(t[0]=[c("button",{class:"bg-ctx-c-btn-600"}," button ",-1),c("div",{class:"ctx-l-btn-800"},[c("button",{class:"bg-ctx-c-btn"}," button "),c("button",{class:"bg-ctx-c-btn-500"}," button ")],-1)]))}const y=n(Z,[["render",R],["__scopeId","data-v-c4965cac"]]),f=`<template>\r
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
`,z={},g={class:"flex ctx-c-btn_red/80"};function Q(a,t){return s(),b("div",g,t[0]||(t[0]=[x('<button class="bg-ctx-c-btn" data-v-9f99e737> button </button><div class="ctx-op-btn-60" data-v-9f99e737><button class="bg-ctx-c-btn" data-v-9f99e737> button </button><button class="bg-ctx-c-btn/40" data-v-9f99e737> button </button><button class="bg-ctx-c-btn/40 bg-op-20" data-v-9f99e737> button </button></div>',2)]))}const B=n(z,[["render",Q],["__scopeId","data-v-9f99e737"]]),q=`<script setup lang="ts">\r
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
`,V=o({__name:"base",setup(a){const t=u(!0);function e(){t.value=!t.value}return(Y,r)=>(s(),b("div",{class:l([t.value?"ctx-c-btn_red":"ctx-c-btn_blue",t.value?"ctx-c-txt_gray-300":"ctx-c-txt_[#ECA9FF]"]),onClick:e},r[0]||(r[0]=[x('<button class="bg-ctx-c-btn" data-v-c72cce89><span class="c-ctx-c-txt" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-100" data-v-c72cce89><span class="c-ctx-c-txt-600" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-300" data-v-c72cce89><span class="c-ctx-c-txt-550" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-500" data-v-c72cce89><span class="c-ctx-c-txt-500" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-700" data-v-c72cce89><span class="c-ctx-c-txt-450" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-900" data-v-c72cce89><span class="c-ctx-c-txt-400" data-v-c72cce89>button</span></button>',6)]),2))}}),w=n(V,[["__scopeId","data-v-c72cce89"]]);export{q as T,w as a,f as b,B as c,W as d,y as e,L as f,M as g,h,C as i};
