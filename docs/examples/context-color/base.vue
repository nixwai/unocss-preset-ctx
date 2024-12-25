<script setup lang="ts">
import { ref } from 'vue';

const v = ref(true);
function handleClick() {
  v.value = !v.value;
}
</script>

<template>
  <div
    :class="[
      v ? 'ctx-c-btn_red' : 'ctx-c-btn_blue',
      v ? 'ctx-c-txt_gray-300' : 'ctx-c-txt_[#ECA9FF]',
    ]"
    @click="handleClick"
  >
    <button class="bg-ctx-c-btn">
      <span class="c-ctx-c-txt">button</span>
    </button>
    <button class="bg-ctx-c-btn-100">
      <span class="c-ctx-c-txt-600">button</span>
    </button>
    <button class="bg-ctx-c-btn-300">
      <span class="c-ctx-c-txt-550">button</span>
    </button>
    <button class="bg-ctx-c-btn-500">
      <span class="c-ctx-c-txt-500">button</span>
    </button>
    <button class="bg-ctx-c-btn-700">
      <span class="c-ctx-c-txt-450">button</span>
    </button>
    <button class="bg-ctx-c-btn-900">
      <span class="c-ctx-c-txt-400">button</span>
    </button>
  </div>
</template>

<style scoped>
button {
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 0 4px;
}
</style>
