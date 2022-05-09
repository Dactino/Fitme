<template>
  <TheHeader />
  <TheContinueAlert
    v-if="checkOperation[0]"
    messageTitle="Delete routine"
    @cancelOperation="checkOperation = false"
    @continueOperation="delRoutine"
    :id="checkOperation[1]"
  />
  <div v-if="modifyRoutine == false">
    <div v-for="routine in routines" :key="routine.id">
      <ARoutine :routine="routine" :days="routine.days.lenght" />
      <div class="flex justify-between space-x-4 flex-inline sm:justify-center">
        <VButton @click="modRou(routine)" variant="secondary"
          >Modificar</VButton
        >
        <VButton @click="checkOp(routine.id)">Eliminar</VButton>
      </div>
    </div>
    <AdminRoutineForm
      :routineCategories="routineCategories"
      :exerciseCategories="exerciseCategories"
      @addRoutine="addRoutine"
    />
  </div>
  <div v-else>
    <AdminRoutineForm
      :routine="modifyRoutine"
      :routineCategories="routineCategories"
      :exerciseCategories="exerciseCategories"
      :addCaterory="false"
      @addRoutine="changeRoutine"
    />
    <VButton @click="modifyRoutine = false">Cancel</VButton>
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
  modifyOurRoutine,
  getExerciseCategories,
} from "@/bd/bd.js";
import { days } from "@/assets/variables.js";
import ARoutine from "@/components/ARoutine.vue";
import TheHeader from "@/components/TheHeader.vue";
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

const modifyRoutine = ref(false);

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

function changeRoutine(newRoutine) {
  modifyOurRoutine(newRoutine, modifyRoutine.value.id);
  modifyRoutine.value = false;
}

function modRou(routine) {
  modifyRoutine.value = routine;
}
</script>
