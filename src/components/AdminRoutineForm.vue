<template>
  <div>
    <TheContinueAlert
      v-if="checkOperation"
      messageTitle="Add routine"
      @cancelOperation="cancelOp"
      @continueOperation="addRoutine"
    />
    <div class="shadow sm:rounded-md">
      <div v-if="routine === null" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="category"
              class="block text-sm font-medium text-gray-700"
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
        <div v-for="index in 7" :key="index">
          {{ days[index - 1] }}
          <AdminRoutineFormDay
            :exerciseCategories="props.exerciseCategories"
            :index="index - 1"
            @addExercise="addExercise"
          />
          <div>
            <div
              v-for="i in newRoutine.days[index - 1].exercises.length"
              :key="i"
            >
              <AExercise
                :exercise="
                  getExercise(newRoutine.days[index - 1].exercises[i - 1])[0]
                "
              />
              <VButton @click="delExercise(i - 1, index - 1)">
                Eliminar Ejercicio
              </VButton>
            </div>
          </div>
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
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import {
  getRoutine,
  deleteRoutine,
  createRoutine,
  getExercise,
  getDayExercises,
} from "@/bd/bd.js";
import { days } from "@/assets/variables.js";
import PlusIcon from "@/icons/PlusIcon.vue";
import AdminRoutineFormDay from "@/components/AdminRoutineFormDay.vue";
import TheContinueAlert from "@/components/TheContinueAlert.vue";
import ADay from "@/components/ADay.vue";
import AExercise from "@/components/AExercise.vue";
import VButton from "@/components/VButton.vue";

const props = defineProps({
  routineCategories: {
    type: Object,
    required: true,
  },
  exerciseCategories: {
    type: Object,
    required: true,
  },
  routine: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["addRoutine"]);

const newRoutine = ref({
  category: "",
  days: [],
});

if (props.routine !== null) {
  props.routine.days.forEach((day) => {
    newRoutine.value.days.push(day);
  });
} else {
  newRoutine.value.days = [
    { exercises: ["Descanso"] },
    { exercises: ["Descanso"] },
    { exercises: ["Descanso"] },
    { exercises: ["Descanso"] },
    { exercises: ["Descanso"] },
    { exercises: ["Descanso"] },
    { exercises: ["Descanso"] },
  ];
}

function deleteDays() {
  days.forEach((day, index) => {
    newRoutine.value.days[index].exercises = ["Descanso"];
  });
}
const checkOperation = ref(false);

function checkOp() {
  checkOperation.value = true;
}

function cancelOp() {
  checkOperation.value = false;
}

function addRoutine() {
  emit("addRoutine", newRoutine.value);
  checkOperation.value = false;
  deleteDays();
}

//Operations with the exercises and the new Routine

function addExercise(exerciseId, index) {
  if (newRoutine.value.days[index].exercises[0] == "Descanso") {
    newRoutine.value.days[index].exercises.splice(0, 1);
  }
  newRoutine.value.days[index].exercises.push(exerciseId);
}

function delExercise(position, index) {
  if (newRoutine.value.days[index].exercises.length == 1) {
    newRoutine.value.days[index].exercises = ["Descanso"];
  } else {
    newRoutine.value.days[index].exercises.splice(position, 1);
  }
}
</script>
