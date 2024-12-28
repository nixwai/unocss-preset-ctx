import{_ as n,o as s,c as a,j as c,d as e,p as d,a0 as o,n as u}from"./framework.danP1z9m.js";const z=`<template>\r
  <div class="flex ctx-c-test_primary ctx-c-bg_ctx-c-test-300 ctx-c-txt_ctx-c-test/50">\r
    <div class="px-2 bg-ctx-c-bg-300 c-ctx-c-txt-700">\r
      test\r
    </div>\r
  </div>\r
</template>\r
`,l={},p={class:"flex ctx-c-test_primary ctx-c-bg_ctx-c-test-300 ctx-c-txt_ctx-c-test/50"};function X(r,t){return s(),a("div",p,t[0]||(t[0]=[c("div",{class:"px-2 bg-ctx-c-bg-300 c-ctx-c-txt-700"}," test ",-1)]))}const Q=n(l,[["render",X]]),R=`<template>\r
  <div class="flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300">\r
    <div class="ctxs-dom">\r
      light\r
    </div>\r
    <div class="ctxs-dom ctx-r-y">\r
      dark\r
    </div>\r
  </div>\r
</template>\r
`,v={},m={class:"flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300"};function i(r,t){return s(),a("div",m,t[0]||(t[0]=[c("div",{class:"ctxs-dom"}," light ",-1),c("div",{class:"ctxs-dom ctx-r-y"}," dark ",-1)]))}const V=n(v,[["render",i]]),g=`<script setup lang="ts">\r
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
  color: white;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  margin: 0 4px;\r
}\r
</style>\r
`,Z=e({__name:"base",setup(r){const t=d(!0);function x(){t.value=!t.value}return(f,b)=>(s(),a("div",{class:u([t.value?"ctx-c-btn_red":"ctx-c-btn_blue",t.value?"ctx-c-txt_gray-300":"ctx-c-txt_[#ECA9FF]"]),onClick:x},b[0]||(b[0]=[o('<button class="bg-ctx-c-btn" data-v-7631ffd5><span class="c-ctx-c-txt" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-100" data-v-7631ffd5><span class="c-ctx-c-txt-600" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-300" data-v-7631ffd5><span class="c-ctx-c-txt-550" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-500" data-v-7631ffd5><span class="c-ctx-c-txt-500" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-700" data-v-7631ffd5><span class="c-ctx-c-txt-450" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-900" data-v-7631ffd5><span class="c-ctx-c-txt-400" data-v-7631ffd5>button</span></button>',6)]),2))}}),N=n(Z,[["__scopeId","data-v-7631ffd5"]]);export{g as T,N as a,R as b,V as c,z as d,Q as e};
