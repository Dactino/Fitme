<template>
  <div
    class="w-full h-full text-lg text-center text-white truncate rounded-lg md:text-xl"
    :class="exercise.id == 'Descanso' ? 'bg-fpurple' : 'bg-fgreen'"
  >
    <div class="py-2 m-auto">
      <h3
        class="mt-1 font-semibold text-fpurple"
        :class="exercise.id != 'Descanso' ? 'text-fpurple' : 'text-fgreen'"
      >
        {{ exercise.name }}
      </h3>
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
