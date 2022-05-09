<template>
  <form
    action="#"
    method=""
    @submit.prevent="$emit('addExercise', newExercise)"
    @keypress.enter="submit"
  >
    <div class="overflow-hidden shadow sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="first-name"
              class="block text-xl font-medium text-fpurple"
              >Nombre del ejercicio</label
            >
            <input
              type="text"
              name="name"
              v-model="newExercise.name"
              id="name"
              autocomplete="name"
              class="block w-full mt-1 border-2 rounded-md shadow-sm text-fgreen border-fpurple focus:border-fpurple sm:text-sm"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="first-name"
              class="block text-xl font-medium text-fpurple"
              >Repeticiones del ejercicio</label
            >
            <input
              type="text"
              name="repetitions"
              v-model="newExercise.repetitions"
              id="repetitions"
              autocomplete="repetitions"
              class="block w-full mt-1 border-2 rounded-md shadow-sm text-fgreen border-fpurple focus:border-fpurple sm:text-sm"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="category" class="block text-xl font-medium text-fpurple"
              >Categoria del ejercicio</label
            >
            <select
              id="category"
              name="category"
              v-model="newExercise.category"
              autocomplete="category-name"
              class="block w-full px-3 py-2 mt-1 font-semibold text-white border-2 focus:border-fgreen bg-fpurple sm:text-sm border-fgreen"
            >
              <option
                :value="category.id"
                v-for="category in categories"
                :key="category.name"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex justify-center px-4 py-3 text-right bg-gray-50 sm:px-6">
        <VButton @click="submit"> Guardar </VButton>
      </div>
    </div>
  </form>
</template>

<script setup>
import { defineProps } from "vue";
import VButton from "@/components/VButton.vue";

defineProps({
  categories: {
    type: Object,
    required: true,
  },
});

const newExercise = {
  name: "",
  repetitions: "",
  category: "",
  image: "",
};
</script>
