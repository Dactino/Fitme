<template>
  <TheContinueAlert
    v-if="checkOperation[0]"
    messageTitle="Delete routine"
    @cancelOperation="checkOperation = false"
    @continueOperation="delRoutine"
    :id="checkOperation[1]"
  />
  <div>
    <div
      class="grid grid-cols-7 gap-8 text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300 lg:flex-none"
    >
      <div v-for="index in 7" :key="index" class="py-2 bg-white">
        {{ days[index - 1] }}
      </div>
    </div>
    <div v-for="routine in routines" :key="routine.id">
      <ARoutine :routine="routine" :days="routine.days.lenght" />
      <VButton @click="checkOp(routine.id)">Eliminar</VButton>
    </div>
    <AdminRoutineForm
      :routineCategories="routineCategories"
      :exerciseCategories="exerciseCategories"
      @addRoutine="addRoutine"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { isAdmin, adminId } from "@/bd/auth";
import {
  auth,
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

auth.onAuthStateChanged(function (us) {
  if (us.uid != adminId) {
    useRouter().push("/404");
  }
});

const routineCategories = getRoutineCategories();

const routines = getRoutines();

const exerciseCategories = getExerciseCategories();

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

function addRoutine(newRoutine) {
  createRoutine(newRoutine);
  console.log("Success");
}
</script>
