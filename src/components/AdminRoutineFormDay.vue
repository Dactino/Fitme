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

    <p v-for="exercise in dayExercises" :key="exercise[0]">
      <AExercise :exercise="exercise[0]" />
    </p>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { getDayExercises } from "@/bd/bd.js";
import ExercisesPerCategory from "@/components/ExercisesPerCategory.vue";
import AExercise from "@/components/AExercise.vue";
import PlusIcon from "@/icons/PlusIcon.vue";

const emit = defineEmits(["changeInExercises"]);

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

const dayIdsExercises = ref({ exercises: [] });

const dayExercises = ref([]);

console.log(props.exercises);

const displayExercises = ref(false);

function addExercise(exerciseId) {
  displayExercises.value = false;
  dayIdsExercises.value.exercises.push(exerciseId);
  dayExercises.value = getDayExercises(dayIdsExercises.value.exercises);
  emit("changeInExercises", dayIdsExercises, props.index);
}
</script>
