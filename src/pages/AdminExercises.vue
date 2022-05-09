<template>
  <TheHeader />
  <div class="space-y-8">
    <div class="flex flex-wrap gap-8 p-8">
      <div
        v-for="exercise in exercises"
        :key="exercise.id"
        class="py-8 space-y-4"
      >
        <div v-if="exercise.id != 'Descanso'">
          <AExercise class="flex" :exercise="exercise" />
          <VButton @click="deleteExercise(exercise.id)">Eliminar</VButton>
        </div>
      </div>
    </div>
    <AdminExerciseForm @addExercise="addExercise" :categories="categories" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { adminId } from "@/bd/auth";
import {
  auth,
  createExercise,
  getExerciseCategories,
  getExercises,
  deleteExercise,
} from "@/bd/bd.js";
import AExercise from "@/components/AExercise.vue";
import TheHeader from "@/components/TheHeader.vue";
import VButton from "@/components/VButton.vue";
import AdminExerciseForm from "@/components/AdminExerciseForm.vue";

auth.onAuthStateChanged(function (us) {
  if (us.uid != adminId) {
    useRouter().push("/404");
  }
});

const categories = getExerciseCategories();

const exercises = getExercises();

function addExercise(newExercise) {
  createExercise(newExercise);
}
</script>
