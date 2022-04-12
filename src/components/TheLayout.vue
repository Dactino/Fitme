<template>
  <TheHeader />

  <slot />

  <TheFooter />
</template>

<script setup>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
</script>
