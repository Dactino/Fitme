<template>
  <span
    class="flex items-center justify-center w-12 h-12 m-auto rounded-md bg-fgreen"
  >
    <component :is="props.icon" class="w-6 h-6 text-white" aria-hidden="true" />
  </span>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: Object,
  },
});
</script>
