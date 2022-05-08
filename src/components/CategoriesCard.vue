<template>
  <router-link
    :to="{ path: '/routines', query: { category: props.category.id } }"
  >
    <div
      class="relative flex flex-col p-8 text-white border shadow-sm hover:bg-fgreen-dark1 bg-fgreen border-fpurple rounded-2xl"
    >
      <component :is="whichIcon()" class="w-auto h-40 sm:h-60" />
      <div class="flex-1">
        <p
          v-if="props.category.mostPopular"
          class="absolute top-0 py-1.5 px-4 bg-fpurple rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2"
        >
          Most popular
        </p>
      </div>

      <h1
        class="flex items-center justify-center text-xl text-white sm:text-4xl"
      >
        {{ props.category.name }}
      </h1>
    </div>
  </router-link>
</template>
<script setup>
import { defineProps } from "vue";
import WaistIcon from "@/icons/WaistIcon.vue";
import GainVolumeIcon from "@/icons/GainVolumeIcon.vue";
import MaintainIcon from "@/icons/MaintainIcon.vue";

const props = defineProps({
  category: {
    type: Object,
  },
});

function whichIcon() {
  switch (props.category.icon) {
    case "WaistIcon":
      return WaistIcon;
    case "GainVolumeIcon":
      return GainVolumeIcon;
    case "MaintainIcon":
      return MaintainIcon;
  }
}
</script>
