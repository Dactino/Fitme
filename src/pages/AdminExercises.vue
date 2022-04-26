<template>
  <div>
    <div v-for="exercise in exercises" :key="exercise.id">
      <AExercise class="flex" :exercise="exercise" />
      <VButton @click="deleteExercise(exercise.id)">Eliminar</VButton>
    </div>
    <form
      action="#"
      method=""
      @submit.prevent="addExercise"
      @keypress.enter="submit"
    >
      <div class="overflow-hidden shadow sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
                >Nombre del ejercicio</label
              >
              <input
                type="text"
                name="name"
                v-model="newExercise.name"
                id="name"
                autocomplete="name"
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
                >Repeticiones del ejercicio</label
              >
              <input
                type="text"
                name="repetitions"
                v-model="newExercise.repetitions"
                id="repetitions"
                autocomplete="repetitions"
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="category"
                class="block text-sm font-medium text-gray-700"
                >Categoria del ejercicio</label
              >
              <select
                id="category"
                name="category"
                v-model="newExercise.category"
                autocomplete="category-name"
                class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  createExercise,
  getExerciseCategories,
  getExercises,
  deleteExercise,
} from "@/bd/bd.js";
import AExercise from "@/components/AExercise.vue";
import VButton from "@/components/VButton.vue";

const newExercise = {
  name: "",
  repetitions: "",
  category: "",
  image: "",
};

const categories = getExerciseCategories();

const exercises = getExercises();

function addExercise() {
  createExercise(newExercise);
}
</script>
