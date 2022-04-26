<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="h-full overflow-y-auto" aria-label="Directory">
    <div v-for="category in categories" :key="category.id" class="relative">
      <div
        class="sticky top-0 z-10 px-6 py-1 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50"
      >
        <h3>{{ category.name }}</h3>
      </div>
      <ul role="list" class="relative z-0 divide-y divide-gray-200">
        <li v-for="exercise in exercises" :key="exercise.id" class="bg-white">
          <AExercise
            :exercise="exercise"
            v-if="exercise.category == category.id"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, ref, onBeforeMount } from "vue";
import { getExerciseCategories, getExercises } from "@/bd/bd.js";
import AExercise from "@/components/AExercise.vue";

const props = defineProps({
  categoryId: {
    type: String,
    default: null,
  },
});

const categories = getExerciseCategories();

const exercises = getExercises();
</script>
