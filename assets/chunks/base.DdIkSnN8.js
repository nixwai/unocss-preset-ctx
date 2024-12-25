import{_ as a,o as s,c as r,j as n,d as l,p as x,a0 as o,n as u}from"./framework.danP1z9m.js";const _=`<template>\r
  <div class="flex ctx-c-bg_gray ctx-c-txt_primary">\r
    <div class="px-2 c-ctx-c-txt-700 bg-ctx-c-bg-300">\r
      light\r
    </div>\r
    <div class="c-ctx-c-txt-700 bg-ctx-c-bg-300 px-2 ctx-r-y">\r
      dark\r
    </div>\r
  </div>\r
</template>\r
`,d={},p={class:"flex ctx-c-bg_gray ctx-c-txt_primary"};function v(e,t){return s(),r("div",p,t[0]||(t[0]=[n("div",{class:"px-2 c-ctx-c-txt-700 bg-ctx-c-bg-300"}," light ",-1),n("div",{class:"c-ctx-c-txt-700 bg-ctx-c-bg-300 px-2 ctx-r-y"}," dark ",-1)]))}const V=a(d,[["render",v]]),C=`<script setup lang="ts">\r
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
`,i=l({__name:"base",setup(e){const t=x(!0);function b(){t.value=!t.value}return(m,c)=>(s(),r("div",{class:u([t.value?"ctx-c-btn_red":"ctx-c-btn_blue",t.value?"ctx-c-txt_gray-300":"ctx-c-txt_[#ECA9FF]"]),onClick:b},c[0]||(c[0]=[o('<button class="bg-ctx-c-btn" data-v-e44657d1><span class="c-ctx-c-txt" data-v-e44657d1>button</span></button><button class="bg-ctx-c-btn-300" data-v-e44657d1><span class="c-ctx-c-txt-550" data-v-e44657d1>button</span></button><button class="bg-ctx-c-btn-500" data-v-e44657d1><span class="c-ctx-c-txt-500" data-v-e44657d1>button</span></button><button class="bg-ctx-c-btn-700" data-v-e44657d1><span class="c-ctx-c-txt-450" data-v-e44657d1>button</span></button><button class="bg-ctx-c-btn-900" data-v-e44657d1><span class="c-ctx-c-txt-400" data-v-e44657d1>button</span></button>',5)]),2))}}),W=a(i,[["__scopeId","data-v-e44657d1"]]);export{C as T,W as a,_ as b,V as c};
