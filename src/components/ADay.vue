<template>
  <div class="grid grid-cols-1 space-y-2 bg-white">
    <div
      v-for="exercise in exercises"
      :key="exercise"
      class="relative flex items-center p-2 space-x-3 hover:border-gray-400"
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
