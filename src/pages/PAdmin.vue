<template>
  <TheLayout>
    <div class="flex-row">
      <div v-for="item in items" :key="item.name" class="flex">
        <router-link :to="{ path: '/trainer/' + item.name }">
          <div
            class="relative flex flex-col p-8 border shadow-sm hover:bg-fgreen-dark1 bg-fgreen border-fpurple rounded-2xl"
          >
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
import { isAdmin } from "@/bd/auth";
import TheLayout from "@/components/TheLayout.vue";
import { useRouter } from "vue-router";

const items = [{ name: "routines" }, { name: "exercises" }];

if (!isAdmin.value) {
  useRouter().push("/404");
}
</script>
