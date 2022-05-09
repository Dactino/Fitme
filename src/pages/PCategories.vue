<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TheLayout>
    <div class="mx-auto bg-white max-w-7xl">
      <h2
        class="text-3xl font-extrabold text-fgreen sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
      >
        Rutinas para todo tipo de objetivos
      </h2>
      <p class="max-w-2xl mt-6 text-xl text-fpurple">
        ¡Escoge la categoría que más se aproxime a lo que estás buscando y
        comienza a ejercitarte!
      </p>

      <div
        class="flex flex-wrap justify-center gap-5 m-auto mt-12 lg:justify-between lg:space-y-0"
      >
        <CategoriesCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </TheLayout>
</template>

<script setup>
import CategoriesCard from "@/components/CategoriesCard.vue";
import TheLayout from "@/components/TheLayout.vue";
import { getRoutineCategories } from "@/bd/bd.js";

const categories = getRoutineCategories();
</script>
