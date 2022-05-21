<template>
  <div
    class="sticky top-0 float-right w-full p-4 md:rounded-md md:m-2 md:top-2 md:w-1/4 bg-fgreen-light2"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon class="w-5 h-5 text-fgreen" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-fgreen-dark2">{{ text }}</p>
      </div>
      <div class="pl-3 ml-auto">
        <div class="-mx-1.5 -my-1.5">
          <button
            type="button"
            @click="$emit('close')"
            class="inline-flex bg-fgreen-light2 rounded-md p-1.5 text-fgreen hover:text-fgreen-dark1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
          >
            <span class="sr-only">Dismiss</span>
            <XCircleIcon class="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CheckCircleIcon from "@/icons/CheckCircleIcon.vue";
import XCircleIcon from "@/icons/XCircleIcon.vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
