<template>
  <TheLayout>
    <h1 class="text-4xl text-fgreen">{{ category.name }}</h1>
    <div
      class="grid grid-cols-7 gap-8 text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300 lg:flex-none"
    >
      <div v-for="index in 7" :key="index" class="py-2 bg-white">
        {{ days[index - 1] }}
      </div>
    </div>
    <div>
      <div v-for="routine in routines" :key="routine.id">
        {{ routine.days.length }}
        <ARoutine :routine="routine" :days="routine.days.lenght" />
      </div>
    </div>
  </TheLayout>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getroutineCategory, getRoutineFromCategory } from "@/bd/bd.js";
import { days } from "@/assets/variables.js";
import TheLayout from "@/components/TheLayout.vue";
import ARoutine from "@/components/ARoutine.vue";

const route = useRoute();
const categoryId = route.query.category;

const routines = getRoutineFromCategory(categoryId);

console.log(routines);

const category = ref([]);

onBeforeMount(async () => {
  category.value = await getroutineCategory(categoryId);
  if (category.value == null) {
    useRouter().push({ path: "/404" });
  }
});
</script>
