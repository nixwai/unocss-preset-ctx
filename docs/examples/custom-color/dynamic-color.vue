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
    <button class="c-blue mx-1" @click="setTheme('blue')">
      blue
    </button>
    <button class="c-green" @click="setTheme('green')">
      green
    </button>
  </div>

  <div ref="demo" class="my-2">
    <button class="px-2 c-white bg-primary rounded-md">
      button
    </button>
  </div>
</template>
