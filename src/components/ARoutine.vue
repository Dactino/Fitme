<template>
  <div class="flex text-white bg-fgreen flex-lineal">
    <div class="flex mt-6">
      <div v-for="day in props.routine.days" :key="day">
        <div v-for="exercises in day" :key="exercises">
          <div v-for="exerciseId in exercises" :key="exerciseId">
            <ADay :exerciseId="exerciseId" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <VButton variant="secondary" class="flex">
        <PlusIcon class="w-5 h-5" />
        <nav>Añadir</nav>
      </VButton>
      <VButton variant="secondary" class="flex">
        <PlusIcon class="w-5 h-5" />
        <nav>Modificar</nav>
      </VButton>
      <VButton variant="secondary" class="flex">
        <PlusIcon class="w-5 h-5" />
        <nav>Ver</nav>
      </VButton>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import PlusIcon from "@/icons/PlusIcon.vue";
import VButton from "@/components/VButton.vue";
import ADay from "@/components/ADay.vue";

const props = defineProps({
  routine: {
    type: Object,
    required: true,
  },
  addExercise: {
    type: Boolean,
    default: false,
  },
});
</script>
