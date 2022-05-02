<template>
  <TheContinueAlert
    v-if="checkOperation[0]"
    messageTitle="Delete routine"
    @cancelOperation="checkOperation = false"
    @continueOperation="delRoutine"
    :id="checkOperation[1]"
  />
  <div>
    <div v-for="routine in routines" :key="routine.id">
      <ARoutine :routine="routine" :days="routine.days.lenght" />
      <VButton @click="checkOp(routine.id)">Eliminar</VButton>
    </div>
    <AdminRoutineForm
      :exercises="exercises"
      :routineCategories="routineCategories"
      :exerciseCategories="exerciseCategories"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  createRoutine,
  deleteRoutine,
  getRoutineCategories,
  getRoutines,
  getExercises,
  getExerciseCategories,
} from "@/bd/bd.js";
import { days } from "@/assets/variables.js";
import ARoutine from "@/components/ARoutine.vue";
import ExercisesPerCategory from "@/components/ExercisesPerCategory.vue";
import AdminRoutineForm from "@/components/AdminRoutineForm.vue";
import TheContinueAlert from "@/components/TheContinueAlert.vue";
import VButton from "@/components/VButton.vue";

const routineCategories = getRoutineCategories();

const routines = getRoutines();

const exerciseCategories = getExerciseCategories();

const exercises = getExercises();

const checkOperation = ref([false]);

function checkOp(idRoutine) {
  checkOperation.value[0] = true;
  checkOperation.value.push(idRoutine);
}

function delRoutine(id) {
  deleteRoutine(id);
  checkOperation.value[0] = false;
  checkOperation.value.pop();
}
</script>
