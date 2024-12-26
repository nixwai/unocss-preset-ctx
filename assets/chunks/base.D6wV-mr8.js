import{_ as s,o as a,c as r,j as n,d as o,p as d,a0 as e,n as l}from"./framework.danP1z9m.js";const f=`<template>\r
  <div class="flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300">\r
    <div class="ctxs-dom">\r
      light\r
    </div>\r
    <div class="ctxs-dom ctx-r-y">\r
      dark\r
    </div>\r
  </div>\r
</template>\r
`,u={},p={class:"flex ctx-c-bg_gray ctx-c-txt_primary ctxs-dom_px-2,c-ctx-c-txt-700,bg-ctx-c-bg-300"};function v(b,t){return a(),r("div",p,t[0]||(t[0]=[n("div",{class:"ctxs-dom"}," light ",-1),n("div",{class:"ctxs-dom ctx-r-y"}," dark ",-1)]))}const Z=s(u,[["render",v]]),_=`<script setup lang="ts">\r
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
`,m=o({__name:"base",setup(b){const t=d(!0);function x(){t.value=!t.value}return(i,c)=>(a(),r("div",{class:l([t.value?"ctx-c-btn_red":"ctx-c-btn_blue",t.value?"ctx-c-txt_gray-300":"ctx-c-txt_[#ECA9FF]"]),onClick:x},c[0]||(c[0]=[e('<button class="bg-ctx-c-btn" data-v-7631ffd5><span class="c-ctx-c-txt" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-100" data-v-7631ffd5><span class="c-ctx-c-txt-600" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-300" data-v-7631ffd5><span class="c-ctx-c-txt-550" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-500" data-v-7631ffd5><span class="c-ctx-c-txt-500" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-700" data-v-7631ffd5><span class="c-ctx-c-txt-450" data-v-7631ffd5>button</span></button><button class="bg-ctx-c-btn-900" data-v-7631ffd5><span class="c-ctx-c-txt-400" data-v-7631ffd5>button</span></button>',6)]),2))}}),g=s(m,[["__scopeId","data-v-7631ffd5"]]);export{_ as T,g as a,f as b,Z as c};
