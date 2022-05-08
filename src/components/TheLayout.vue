<template>
  <TheHeader />
  <div class="px-4 py-8 lg:px-8 md:px-6">
    <slot />
  </div>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
</script>
