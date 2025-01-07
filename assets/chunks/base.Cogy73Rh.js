import{_ as n,o as s,c as b,j as c,a0 as e,d as x,p as u,n as d}from"./framework.BFGFFC7y.js";const h=`<template>\r
  <div class="flex ctx-c-test_blue-700 ctx-c-bg_ctx-c-test-300 ctx-c-txt_ctx-c-test/50">\r
    <div class="px-2 bg-ctx-c-bg-300 c-ctx-c-txt-800">\r
      test\r
    </div>\r
  </div>\r
</template>\r
`,l={},X={class:"flex ctx-c-test_blue-700 ctx-c-bg_ctx-c-test-300 ctx-c-txt_ctx-c-test/50"};function v(a,t){return s(),b("div",X,t[0]||(t[0]=[c("div",{class:"px-2 bg-ctx-c-bg-300 c-ctx-c-txt-800"}," test ",-1)]))}const C=n(l,[["render",v]]),L=`<template>\r
  <div class="flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300">\r
    <div class="ctxs-dom">\r
      light\r
    </div>\r
    <div class="ctxs-dom ctx-r-y">\r
      dark\r
    </div>\r
  </div>\r
</template>\r
`,p={},m={class:"flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300"};function i(a,t){return s(),b("div",m,t[0]||(t[0]=[c("div",{class:"ctxs-dom"}," light ",-1),c("div",{class:"ctxs-dom ctx-r-y"}," dark ",-1)]))}const M=n(p,[["render",i]]),W=`<template>\r
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
`,Z={},R={class:"flex ctx-c-btn_red-400"};function z(a,t){return s(),b("div",R,t[0]||(t[0]=[c("button",{class:"bg-ctx-c-btn-600"}," button ",-1),c("div",{class:"ctx-l-btn-800"},[c("button",{class:"bg-ctx-c-btn"}," button "),c("button",{class:"bg-ctx-c-btn-500"}," button ")],-1)]))}const f=n(Z,[["render",z],["__scopeId","data-v-c4965cac"]]),y=`<template>\r
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
`,_={},Q={class:"flex ctx-c-btn_red/80"};function V(a,t){return s(),b("div",Q,t[0]||(t[0]=[e('<button class="bg-ctx-c-btn" data-v-9f99e737> button </button><div class="ctx-op-btn-60" data-v-9f99e737><button class="bg-ctx-c-btn" data-v-9f99e737> button </button><button class="bg-ctx-c-btn/40" data-v-9f99e737> button </button><button class="bg-ctx-c-btn/40 bg-op-20" data-v-9f99e737> button </button></div>',2)]))}const B=n(_,[["render",V],["__scopeId","data-v-9f99e737"]]),q=`<script setup lang="ts">\r
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
`,g=x({__name:"base",setup(a){const t=u(!0);function o(){t.value=!t.value}return(Y,r)=>(s(),b("div",{class:d([t.value?"ctx-c-btn_red":"ctx-c-btn_blue",t.value?"ctx-c-txt_gray-300":"ctx-c-txt_[#ECA9FF]"]),onClick:o},r[0]||(r[0]=[e('<button class="bg-ctx-c-btn" data-v-c72cce89><span class="c-ctx-c-txt" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-100" data-v-c72cce89><span class="c-ctx-c-txt-600" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-300" data-v-c72cce89><span class="c-ctx-c-txt-550" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-500" data-v-c72cce89><span class="c-ctx-c-txt-500" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-700" data-v-c72cce89><span class="c-ctx-c-txt-450" data-v-c72cce89>button</span></button><button class="bg-ctx-c-btn-900" data-v-c72cce89><span class="c-ctx-c-txt-400" data-v-c72cce89>button</span></button>',6)]),2))}}),w=n(g,[["__scopeId","data-v-c72cce89"]]);export{q as T,w as a,y as b,B as c,W as d,f as e,L as f,M as g,h,C as i};
