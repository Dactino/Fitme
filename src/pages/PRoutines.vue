<template>
  <TheLayout>
    <h1 class="text-4xl text-fgreen">{{ category.name }}</h1>
    <div
      class="grid grid-cols-7 gap-8 text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300 lg:flex-none"
    >
      <div v-for="index in 7" :key="index" class="py-2 bg-white">
        {{ days[index - 1] }}
      </div>
    </div>
    <div v-if="modifyRoutine == false">
      <div v-for="routine in routines" :key="routine.id">
        <div>
          <ARoutine :routine="routine" />
          <VButton v-if="isLogged" @click="modRou(routine)">Modify</VButton>
          <VButton @click="addUserRoutine(routine)">Save</VButton>
        </div>
      </div>
    </div>
    <div v-else>
      <AdminRoutineForm
        :routine="modifyRoutine"
        :routineCategories="routineCategories"
        :exerciseCategories="exerciseCategories"
        @addRoutine="addUserRoutine"
      />
      <VButton @click="modifyRoutine = false">Cancel</VButton>
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
</script>
