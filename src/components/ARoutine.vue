<template>
  <div class="flex flex-lineal">
    <div class="flex mt-6">
      <div v-for="day in routine.days" :key="day">
        <ADay :exercisesIds="day.exercises" />
      </div>
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
});

console.log(props.routine);
console.log("aroutine");
</script>
