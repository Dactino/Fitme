<template>
  <div class="grid grid-cols-1 gap-2">
    <div
      v-for="exercise in exercises"
      :key="exercise.id"
      class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div class="flex-shrink-0">
        <img class="w-10 h-10 rounded-full" :src="exercise.image" alt="" />
      </div>
      <div class="flex-1 min-w-0">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ exercise.name }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ exercise.repetitions }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { getDayExercises } from "@/bd/bd.js";
import PlusIcon from "@/icons/PlusIcon.vue";
import VButton from "@/components/VButton.vue";
import AExercise from "@/components/AExercise.vue";

const props = defineProps({
  exercisesIds: {
    type: Object,
    required: true,
  },
  addExercise: {
    type: Boolean,
    default: false,
  },
});

const exercises = getDayExercises(props.exercisesIds);
</script>
