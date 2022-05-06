<template>
  <ExercisesPerCategory
    :categories="exerciseCategories"
    :exercises="props.exercises"
    v-if="displayExercises"
    @close="displayExercises = false"
    @addExercise="addExercise"
  />
  <div class="flex flex-col">
    <button
      @click="displayExercises = true"
      class="relative block p-8 text-center border-2 border-gray-300 border-dashed rounded-lg"
    >
      <PlusIcon class="w-auto h-5" />
    </button>
    <div v-if="dayExercises != 'Descanso'">
      <div v-for="index in dayExercises.length" :key="index">
        <AExercise :exercise="dayExercises[index - 1][0]" />
        <VButton @click="delExercise(index - 1)"> Eliminar Ejercicio </VButton>
      </div>
    </div>
    <div v-else>Descanso</div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { getDayExercises, getExercise } from "@/bd/bd.js";
import ExercisesPerCategory from "@/components/ExercisesPerCategory.vue";
import AExercise from "@/components/AExercise.vue";
import VButton from "@/components/VButton.vue";
import PlusIcon from "@/icons/PlusIcon.vue";

const emit = defineEmits(["changeInExercises", "delExercise", "addExercise"]);

const props = defineProps({
  exerciseCategories: {
    type: Object,
    required: true,
  },
  exercises: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const dayIdsExercises = ref({ exercises: ["Descanso"] });

const dayExercises = ref("Descanso");

const displayExercises = ref(false);

function addExercise(exerciseId) {
  displayExercises.value = false;
  if (dayIdsExercises.value.exercises[0] == "Descanso")
    dayIdsExercises.value.exercises.splice(0, 1);
  dayIdsExercises.value.exercises.push(exerciseId);
  dayExercises.value = getDayExercises(dayIdsExercises.value.exercises);
  emit("changeInExercises", dayIdsExercises, props.index);
}

function delExercise(position) {
  if (dayIdsExercises.value.exercises.length == 1) {
    dayIdsExercises.value.exercises = "Descanso";
    dayExercises.value = "Descanso";
  } else {
    dayIdsExercises.value.exercises.splice(position, 1);
    dayExercises.value = getDayExercises(dayIdsExercises.value.exercises);
  }
  emit("changeInExercises", dayIdsExercises, props.index);
}
</script>
