<template>
  <div @vnode-mounted="arrow.scrollEvent">
    <router-view />
    <TheUpArrow v-if="scrollY" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheUpArrow from "./components/TheUpArrow.vue";

const scrollY = ref(false);

const arrow = {
  scrollEvent() {
    window.addEventListener("scroll", this.showWhenScroll);
  },
  showWhenScroll() {
    window.scrollY > 300 ? (scrollY.value = true) : (scrollY.value = false);
  },
};
</script>
