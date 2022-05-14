<template>
  <div class="relative py-8 overflow-hidden">
    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48" />
    <div class="relative">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
          :class="props.feature.right ? 'lg:col-start-2' : 'lg:col-start-1'"
        >
          <div>
            <div class="w-12 h-12">
              <VFeature :icon="props.feature.icon" aria-hidden="true" />
            </div>
            <!-- 
                Por qué la página es fácil, rápida, segura y efectiva 
                Hay que poner imagenes del resultado final de las rutinas
            -->
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-fgreen">
                {{ props.feature.name }}
              </h2>
              <p class="mt-4 text-lg text-fpurple">
                {{ props.feature.description }}
              </p>
              <div class="mt-6">
                <router-link to="/categories">
                  <VButton variant="primary">Empezar</VButton>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 sm:mt-8 lg:mt-0">
          <div
            class="-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            :class="props.feature.right ? 'pl-4' : 'lg:pr-4'"
          >
            <img
              class="shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:w-full lg:h-full lg:max-w-none"
              :src="feature.img"
              alt="Inbox user interface"
              :class="
                props.feature.right
                  ? 'lg:right-0'
                  : 'lg:left-0 sm:rounded-xl rounded-none'
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import VFeature from "@/components/VFeature.vue";
import VButton from "@/components/VButton.vue";

const props = defineProps({
  feature: {
    type: Object,
  },
});
</script>
