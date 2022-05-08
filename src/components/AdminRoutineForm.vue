<template>
  <div class="space-y-4">
    <TheContinueAlert
      v-if="checkOperation"
      messageTitle="Add routine"
      @cancelOperation="cancelOp"
      @continueOperation="addRoutine"
    />
    <div>
      <div v-if="addCaterory" class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="category" class="block text-xl font-medium text-fpurple"
              >Categoria de la rutina</label
            >
            <select
              id="category"
              name="category"
              v-model="newRoutine.category"
              autocomplete="category-name"
              class="block w-full px-3 py-2 mt-1 bg-fgreen sm:text-sm text-fpurple focus:border-fpurple"
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
      <div class="flex flex-wrap justify-center gap-8 lg:grid lg:grid-cols-7">
        <div v-for="index in 7" :key="index" class="space-y-2">
          <p class="text-lg font-medium text-fpurple">
            {{ days[index - 1] }}
          </p>
          <AdminRoutineFormDay
            :exerciseCategories="props.exerciseCategories"
            :index="index - 1"
            @addExercise="addExercise"
          />
          <div class="space-y-2">
            <div
              v-for="i in newRoutine.days[index - 1].exercises.length"
              :key="i"
              class="space-y-2"
            >
              <AExercise
                :exercise="
                  getExercise(newRoutine.days[index - 1].exercises[i - 1])[0]
                "
              />
              <VButton
                v-if="newRoutine.days[index - 1].exercises[i - 1] != 'Descanso'"
                @click="delExercise(i - 1, index - 1)"
              >
                Eliminar Ejercicio
              </VButton>
            </div>
          </div>
        </div>
      </div>
      <VButton
        @click="checkOp"
        class="w-full m-auto my-4 sm:w-1/6 lg:w-1/12"
        variant="secondary"
      >
        Guardar
      </VButton>
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
  addCaterory: {
    type: Boolean,
    default: true,
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
