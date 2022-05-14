<template>
  <div
    class="flex flex-col justify-center gap-8 px-8 lg:border-l-2 lg:border-l-fpurple"
  >
    <div class="flex justify-start flex-inline text-fpurple">
      <ListIcon class="w-20 h-20" />
      <div class="flex flex-col gap-6">
        <h3 class="text-2xl font-semibold text-fgreen">
          Lista de rutinas personalizadas
        </h3>
        <p class="text-base">
          Encuentra la rutina que más se adapte a lo que buscas y guárdala
        </p>
      </div>
    </div>
    <h3 class="text-2xl font-semibold text-fgreen">...o...</h3>
    <div class="flex justify-start flex-inline text-fpurple">
      <DocumentAddIcon class="w-20 h-20" />
      <div class="flex flex-col gap-6">
        <h3 class="text-2xl font-semibold text-fgreen">
          Crea tus propias rutinas
        </h3>
        <p class="text-base">
          Si no ves la rutina que buscabas, no te preocupes, ¡puedes crearla tú
          mismo!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ListIcon from "@/icons/ListIcon.vue";
import DocumentAddIcon from "@/icons/DocumentAddIcon.vue";
</script>
