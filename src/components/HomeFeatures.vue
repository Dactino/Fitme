<template>
  <div class="m-auto text-center bg-fpurple">
    <div
      class="max-w-4xl px-4 py-8 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
    >
      <h1 class="text-4xl font-extrabold tracking-tight text-fgreen">
        Lo que hacemos:
      </h1>
      <p class="max-w-3xl mx-auto mt-4 text-lg text-white">
        Nos encragamos de ofrecer herramientas para que hacer ejercicio sea más
        fácil que nunca. Con nuestra ayuda ya no podrás dejar para el día
        siguiente el deporte
      </p>
      <div
        class="grid justify-center grid-cols-2 mt-12 gap-x-6 gap-y-12 sm:grid-cols-4 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
      >
        <div v-for="feature in props.features" :key="feature.name">
          <div class="flex-col">
            <VFeature :icon="feature.icon" />
          </div>
          <div class="mt-1 text-center">
            <h3 class="text-lg font-medium text-white">
              {{ feature.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import VFeature from "@/components/VFeature.vue";

const props = defineProps({
  features: {
    type: Object,
  },
});
</script>
