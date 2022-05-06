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
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { getDayExercises, getExercises } from "@/bd/bd.js";
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
  index: {
    type: Number,
    required: true,
  },
});

const exercises = getExercises();

const dayIdsExercises = ref({ exercises: ["Descanso"] });

const dayExercises = ref("Descanso");

const displayExercises = ref(false);

function addExercise(exerciseId) {
  displayExercises.value = false;
  emit("addExercise", exerciseId, props.index);
}

function delExercise(position) {
  emit("delExercise", position, props.index);
}
</script>
