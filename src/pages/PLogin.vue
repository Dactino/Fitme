<template>
  <div class="px-8">
    <img
      src="../../public/Logo.png"
      alt=""
      class="object-cover object-top w-1/6 h-auto m-auto mt-5"
    />
  </div>
  <div class="grid grid-cols-2 py-12">
    <div class="grid grid-cols-2 text-fgreen">
      <p>Crea tus propias rutinas</p>
      <p>Lista de rutinas personalizadas</p>
    </div>
    <div class="border-l-2 border-l-fpurple">
      <LoginForm />
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
