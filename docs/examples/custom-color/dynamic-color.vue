<script setup lang="ts">
import { updateThemeColor } from 'unocss-preset-ctx/helper';
import { ref } from 'vue';

const demo = ref<HTMLElement>();
function setTheme(color: string) {
  updateThemeColor({ name: 'primary', color, dom: demo.value });
}
</script>

<template>
  <div class="flex">
    <div>toggle: </div>
    <button class="mx-1 c-blue" @click="setTheme('blue')">
      blue
    </button>
    <button class="c-green" @click="setTheme('green')">
      green
    </button>
  </div>

  <div ref="demo" class="my-2">
    <button class="bg-primary c-white px-2 rounded-md">
      button
    </button>
  </div>
</template>
