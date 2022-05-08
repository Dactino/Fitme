<template>
  <TheLayout>
    <div class="flex flex-wrap justify-center gap-8 m-auto lg:space-y-0">
      <div v-for="item in items" :key="item.name" class="flex">
        <router-link :to="{ path: '/trainer/' + item.slug }">
          <div
            class="relative flex flex-col p-8 border shadow-sm hover:bg-fgreen-dark1 bg-fgreen border-fpurple rounded-2xl"
          >
            <component class="w-auto h-40 text-white sm:h-60" :is="item.icon" />
            <h1
              class="flex items-center justify-center text-xl text-white sm:text-4xl"
            >
              {{ item.name }}
            </h1>
          </div>
        </router-link>
      </div>
    </div>
  </TheLayout>
</template>

<script setup>
import * as functions from "@/bd/bd.js";
import { adminId } from "@/bd/auth";
import { useRouter } from "vue-router";
import TheLayout from "@/components/TheLayout.vue";
import RoutineIcon from "@/icons/RoutineIcon.vue";
import ExerciseIcon from "@/icons/ExerciseIcon.vue";

const items = [
  { name: "Rutinas", slug: "routines", icon: RoutineIcon },
  { name: "Ejercicios", slug: "exercises", icon: ExerciseIcon },
];

functions.auth.onAuthStateChanged(function (us) {
  if (us.uid != adminId) {
    useRouter().push("/404");
  }
});
</script>
