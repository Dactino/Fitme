<template>
  <TheContinueAlert
    v-if="checkOperation[0]"
    messageTitle="Delete routine"
    @cancelOperation="checkOperation = false"
    @continueOperation="delRoutine"
    :id="checkOperation[1]"
  />
  <div v-if="modifyRoutine == false">
    <div v-for="routine in routines" :key="routine.id">
      <div>
        <ARoutine :routine="routine" />
        <div class="flex flex-wrap justify-center gap-4 flex-inline">
          <VButton @click="modRou(routine)" variant="secondary"
            >Modificar</VButton
          >
          <VButton @click="checkOp(routine.id)">Eliminar</VButton>
          <VButton @click="obtainPdf(routine.id)" variant="terciary"
            >Exportar PDF</VButton
          >
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <AdminRoutineForm
      :routine="modifyRoutine"
      :routineCategories="routineCategories"
      :exerciseCategories="exerciseCategories"
      :addCaterory="false"
      @addRoutine="changeUserRoutine"
    />
    <VButton @click="modifyRoutine = false">Cancel</VButton>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import {
  auth,
  modifyUserRoutine,
  getUserRoutines,
  deleteUserRoutine,
  getRoutineCategories,
  getExerciseCategories,
} from "@/bd/bd.js";
import { isLogged } from "@/bd/auth.js";
import { days } from "@/assets/variables.js";
import { getPdf } from "@/assets/htmlToPdf.js";
import ARoutine from "@/components/ARoutine.vue";
import AdminRoutineForm from "@/components/AdminRoutineForm.vue";
import VButton from "@/components/VButton.vue";
import TheContinueAlert from "@/components/TheContinueAlert.vue";

//Get the profile information
auth.onAuthStateChanged(function (us) {
  if (us) {
    userId.value = us.uid;
  }
});

const userId = ref();
const routines = getUserRoutines(userId.value);

const modifyRoutine = ref(false);

const router = useRouter();

function changeUserRoutine(newRoutine) {
  modifyUserRoutine(newRoutine, modifyRoutine.value.id);
  modifyRoutine.value = false;
  router.push("/profile");
}

function modRou(routine) {
  modifyRoutine.value = routine;
}

//Check if the user is sure to change something
const checkOperation = ref([false]);

function checkOp(routineId) {
  checkOperation.value.push(routineId);
  checkOperation.value[0] = true;
}

function delRoutine(routineId) {
  deleteUserRoutine(routineId);
  checkOperation.value[0] = false;
  checkOperation.value.pop();
}

const routineCategories = getRoutineCategories();

const exerciseCategories = getExerciseCategories();

//Get PDF
function obtainPdf(routineId) {
  getPdf(routineId);
}
</script>
