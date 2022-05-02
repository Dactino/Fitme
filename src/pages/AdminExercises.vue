<template>
  <div>
    <div v-for="exercise in exercises" :key="exercise.id">
      <AExercise class="flex" :exercise="exercise" />
      <VButton @click="deleteExercise(exercise.id)">Eliminar</VButton>
    </div>
    <AdminExerciseForm @addExercise="addExercise" :categories="categories" />
  </div>
</template>

<script setup>
import {
  createExercise,
  getExerciseCategories,
  getExercises,
  deleteExercise,
} from "@/bd/bd.js";
import AExercise from "@/components/AExercise.vue";
import VButton from "@/components/VButton.vue";
import AdminExerciseForm from "@/components/AdminExerciseForm.vue";

const categories = getExerciseCategories();

const exercises = getExercises();

function addExercise(newExercise) {
  createExercise(newExercise);
}
</script>
