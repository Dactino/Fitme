<template>
  <div class="text-white bg-fgreen">
    <!-- Imagen no definitiva -->
    <div class="hidden w-full overflow-hidden rounded-md aspect-w-1 aspect-h-1">
      <img
        :src="exercise.image"
        :alt="exercise.name"
        class="object-cover object-center w-full h-full group-hover:opacity-75"
      />
    </div>
    <div class="mt-6">
      <h3 class="mt-1 font-semibold text-fpurple">{{ exercise.name }}</h3>
      <p class="mt-1">{{ exercise.repetitions }}</p>
    </div>
    <div v-if="addExercise">
      <VButton
        variant="secondary"
        @click="emit('addExercise', exercise.id)"
        class="flex"
      >
        <PlusIcon class="w-5 h-5" />
        <nav>Añadir</nav>
      </VButton>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onBeforeMount } from "vue";
import { getExercise } from "@/bd/bd.js";
import PlusIcon from "@/icons/PlusIcon.vue";
import VButton from "@/components/VButton.vue";

defineProps({
  exercise: {
    type: Object,
    required: true,
  },
  addExercise: {
    type: Boolean,
    default: false,
  },
});
</script>
