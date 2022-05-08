<template>
  <div class="grid w-full grid-cols-7 gap-px isolate">
    <div v-for="index in 7" :key="index" class="py-2 bg-white">
      <ADay :exercisesIds="props.routine.days[index - 1].exercises" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { days } from "@/assets/variables";
import PlusIcon from "@/icons/PlusIcon.vue";
import VButton from "@/components/VButton.vue";
import ADay from "@/components/ADay.vue";

const props = defineProps({
  routine: {
    type: Object,
    required: true,
  },
});
</script>
