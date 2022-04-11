<template>
  <div class="m-auto text-center bg-fpurple">
    <div
      class="max-w-4xl px-4 py-8 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
    >
      <h1 class="text-4xl font-extrabold tracking-tight text-fgreen">
        Inbox support built for efficiency
      </h1>
      <p class="max-w-3xl mx-auto mt-4 text-lg text-white">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
      </p>
      <div
        class="grid justify-center grid-cols-2 mt-12 gap-x-6 gap-y-12 sm:grid-cols-4 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
      >
        <div v-for="feature in features" :key="feature.name">
          <div class="flex-col">
            <span
              class="flex items-center justify-center w-12 h-12 m-auto rounded-md bg-fgreen"
            >
              <component
                :is="feature.icon"
                class="w-6 h-6 text-white"
                aria-hidden="true"
              />
            </span>
          </div>
          <div class="mt-1 text-center">
            <h3 class="text-lg font-medium text-white">
              {{ feature.name }}
            </h3>
            <p class="mt-2 text-base text-purple-200">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EasyIcon from "../icons/EasyIcon.vue";
import QuickIcon from "../icons/QuickIcon.vue";
import ShieldIcon from "../icons/ShieldIcon.vue";
import EffectiveIcon from "../icons/EffectiveIcon.vue";

const features = [
  {
    name: "Easy",
    icon: EasyIcon,
  },
  {
    name: "Quick",
    icon: QuickIcon,
  },
  {
    name: "Reliable",
    icon: ShieldIcon,
  },
  {
    name: "Effective",
    icon: EffectiveIcon,
  },
];
</script>
