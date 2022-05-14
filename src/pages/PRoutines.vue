<template>
  <TheLayout>
    <h1 class="text-4xl font-bold text-fgreen">{{ category.name }}</h1>
    <div v-if="modifyRoutine == false">
      <div v-for="routine in routines" :key="routine.id">
        <div class="">
          <ARoutine :routine="routine" />
          <div
            class="flex flex-wrap justify-center gap-4 flex-inline sm:flex-none"
          >
            <VButton v-if="isLogged" @click="modRou(routine)"
              >Modificar</VButton
            >
            <VButton
              v-if="isLogged"
              @click="addUserRoutine(routine)"
              variant="secondary"
              >Guardar</VButton
            >
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
        @addRoutine="addUserRoutine"
      />
      <VButton @click="modifyRoutine = false">Cancelar</VButton>
    </div>
  </TheLayout>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getroutineCategory,
  getRoutineFromCategory,
  getRoutineCategories,
  getExerciseCategories,
  createUserRoutine,
} from "@/bd/bd.js";
import { isLogged } from "@/bd/auth.js";
import { days } from "@/assets/variables.js";
import { getPdf } from "@/assets/htmlToPdf.js";
import TheLayout from "@/components/TheLayout.vue";
import ARoutine from "@/components/ARoutine.vue";
import AdminRoutineForm from "@/components/AdminRoutineForm.vue";
import VButton from "@/components/VButton.vue";

const modifyRoutine = ref(false);

const routineCategories = getRoutineCategories();

const exerciseCategories = getExerciseCategories();

const router = useRouter();
const route = useRoute();
const categoryId = route.query.category;

const routines = getRoutineFromCategory(categoryId);
console.log(routines, "routines");

const category = ref([]);

onBeforeMount(async () => {
  category.value = await getroutineCategory(categoryId);
  if (category.value == null) {
    router.push({ path: "/404" });
  }
});

function addUserRoutine(newRoutine) {
  createUserRoutine(newRoutine);
  modifyRoutine.value = false;
  router.push("/profile");
}

function modRou(routine) {
  modifyRoutine.value = routine;
}

//Get PDF
function obtainPdf(routineId) {
  getPdf(routineId);
}
</script>
