<template>
  <div as="div" class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
      >
        <div>
          <div class="mt-3 text-center sm:mt-5">
            <div class="mt-2">
              <nav class="h-full overflow-y-auto" aria-label="Directory">
                <div
                  v-for="category in categories"
                  :key="category.id"
                  class="relative"
                >
                  <div
                    class="sticky top-0 z-10 px-6 py-1 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50"
                  >
                    <h3>{{ category.name }}</h3>
                  </div>
                  <ul role="list" class="relative z-0 divide-y divide-gray-200">
                    <li
                      v-for="exercise in exercises.filter((ex) => {
                        return ex.category == category.id;
                      })"
                      :key="exercise.id"
                      @click="$emit('addExercise', exercise.id)"
                      class="bg-white hover:cursor-pointer"
                    >
                      <div
                        class="relative flex items-center px-6 py-5 space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                      >
                        <button>
                          {{ exercise.name }}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            @click="$emit('close')"
            ref="cancelButtonRef"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { getExercises } from "@/bd/bd.js";

const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});

const exercises = getExercises();
</script>
