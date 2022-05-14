<template>
  <p class="mt-4 text-2xl font-medium sm:hidden text-fpurple">Rutina</p>
  <div
    :id="routine.id"
    class="justify-center w-full my-4 text-xs font-semibold leading-6 text-center text-gray-700 lg:grid sm:flex sm:flex-wrap lg:grid-cols-7 lg:flex-none"
  >
    <div
      v-for="index in 7"
      :key="index"
      class="w-full py-2 bg-white border-l-2 border-r-2 border-y-2 sm:w-auto border-fpurple"
    >
      <p class="m-2 text-xl text-fpurple">
        {{ days[index - 1] }}
      </p>
      <ADay
        :exercisesIds="props.routine.days[index - 1].exercises"
        class="py-2"
      />
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
