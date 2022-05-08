<template>
  <div class="grid grid-cols-1 gap-2 bg-fpurple h-95">
    <div
      v-for="exercise in exercises"
      :key="exercise"
      class="relative flex items-center px-6 py-5 space-x-3 text-black bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <AExercise :exercise="exercise[0]" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { getDayExercises, getExercise } from "@/bd/bd.js";
import PlusIcon from "@/icons/PlusIcon.vue";
import VButton from "@/components/VButton.vue";
import AExercise from "@/components/AExercise.vue";

const props = defineProps({
  exercisesIds: {
    type: Object,
    required: true,
  },
});

const exercises = getDayExercises(props.exercisesIds);
</script>
