<template>
  <TheContinueAlert
    v-if="checkOperation"
    messageTitle="Add routine"
    @cancelOperation="cancelOp"
    @continueOperation="addRoutine"
  />
  <div class="overflow-hidden shadow sm:rounded-md">
    <div class="px-4 py-5 bg-white sm:p-6">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="category" class="block text-sm font-medium text-gray-700"
            >Categoria de la rutina</label
          >
          <select
            id="category"
            name="category"
            v-model="newRoutine.category"
            autocomplete="category-name"
            class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option
              :value="category.id"
              v-for="category in routineCategories"
              :key="category.name"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex gap-8 flex-inline">
      <div v-for="index in daysNumber" :key="index">
        Exercises Day {{ index }}
        <AdminRoutineFormDay
          :exerciseCategories="exerciseCategories"
          :exercises="exercises"
          :index="index - 1"
          @changeInExercises="changeInExercises"
        />
        <p
          v-for="exercise in newRoutine.days[index]"
          :key="exercise[0]"
          class="text-black"
        >
          <AExercise :exercise="exercise[0]" />
          exercise
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <button @click="addDayNumber">Añadir dia</button>
        <button @click="delDayNumber">Eliminar dia</button>
      </div>
    </div>
    <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
      <button
        @click="checkOp"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { deleteRoutine, createRoutine } from "@/bd/bd.js";
import { days } from "@/assets/variables.js";
import PlusIcon from "@/icons/PlusIcon.vue";
import AdminRoutineFormDay from "@/components/AdminRoutineFormDay.vue";
import TheContinueAlert from "@/components/TheContinueAlert.vue";
import ADay from "@/components/ADay.vue";

defineProps({
  routineCategories: {
    type: Object,
    required: true,
  },
  exerciseCategories: {
    type: Object,
    required: true,
  },
  exercises: {
    type: Object,
    required: true,
  },
});

const dayExercises = ref([]);

const newRoutine = {
  category: "",
  days: {},
};

const daysNumber = ref(3);

const checkOperation = ref(false);

function changeInExercises(DayExercises, index) {
  newRoutine.days[index] = DayExercises.value;
  console.log("routine-", newRoutine.days);
}

function addDayNumber() {
  if (daysNumber.value < 5) {
    daysNumber.value++;
  } else console.log("No se puede exceder el número máximo de días permitidos");
}

function delDayNumber() {
  if (daysNumber.value > 2) {
    daysNumber.value--;
    if (newRoutine.days[daysNumber.value] != null) {
      newRoutine.days.pop();
      console.log("eliminado con exito");
    } else {
      console.log("no existe");
    }
  } else console.log("No se puede exceder el número mínimo de días permitidos");
}

function checkOp() {
  checkOperation.value = true;
  console.log(checkOperation.value);
  console.log(newRoutine);
}

function cancelOp() {
  checkOperation.value = false;
  console.log(checkOperation.value);
}

function addRoutine() {
  createRoutine(newRoutine);
  checkOperation.value = false;
}
</script>
