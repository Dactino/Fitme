<template>
  <TheLayout>
    <h1 class="text-4xl text-fgreen">{{ category.name }}</h1>
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
import { getroutineCategory } from "@/bd/bd.js";
import { getRoutineFromCategory } from "@/bd/bd.js";
import TheLayout from "@/components/TheLayout.vue";
import ARoutine from "@/components/ARoutine.vue";

const route = useRoute();
const categoryId = route.query.category;
console.log(categoryId);

const routines = getRoutineFromCategory(categoryId);
console.log(routines.value);

const category = ref([]);

onBeforeMount(async () => {
  category.value = await getroutineCategory(categoryId);
  if (category.value == null) {
    useRouter().push({ path: "/404" });
  }
});
</script>
