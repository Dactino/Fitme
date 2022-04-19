<template>
  <div v-for="category in categories" :key="category.id">
    <p>{{ category.Nombre }}</p>
  </div>
</template>

<script setup>
import { useLoadroutineCategories } from "@/bd/bd.js";
const categories = useLoadroutineCategories();
console.log(categories);
</script>
