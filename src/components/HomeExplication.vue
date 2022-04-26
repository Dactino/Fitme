<template>
  <div class="relative pt-16 pb-32 overflow-hidden">
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
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ props.feature.name }}
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                {{ props.feature.description }}
              </p>
              <div class="mt-6">
                <a href="/categories">
                  <VButton variant="primary">Get started</VButton>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            :class="props.feature.right ? 'pl-4' : 'pr-4'"
          >
            <img
              class="shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:max-w-none"
              src="../../public/home_hero_3.jpeg"
              alt="Inbox user interface"
              :class="props.feature.right ? 'lg:right-0' : 'lg:left-0'"
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
