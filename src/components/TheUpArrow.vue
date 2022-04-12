<template>
  <button
    id="backToTop"
    type="button"
    class="fixed z-10 inline-flex items-center p-3 bg-white border-2 rounded-full shadow-sm border-fgreen right-1 text-fpurple hover:border-fpurple hover:text-fgreen focus:outline-none focus:ring-2 focus:ring-fgreen focus:ring-offset-2 bottom-1"
    @click="arrow.backToTop"
  >
    <ArrowUpIcon class="w-6 h-6" aria-hidden="true" />
  </button>
</template>

<script setup>
import ArrowUpIcon from "../icons/ArrowUpIcon.vue";

const arrow = {
  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
};
</script>
