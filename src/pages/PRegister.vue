<template>
  <div class="object-cover object-top w-1/2 h-auto px-8 m-auto mt-5 md:w-1/4">
    <a href="/">
      <img src="../../public/Logo.png" alt="" class="hover:opacity-80"
    /></a>
  </div>
  <div class="py-12 lg:grid lg:grid-cols-2">
    <div class="grid grid-cols-2 text-fgreen">
      <p>Crea tus propias rutinas</p>
      <p>Lista de rutinas personalizadas</p>
    </div>
    <div class="lg:border-l-2 lg:border-l-fpurple">
      <RegisterForm />
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
import RegisterForm from "@/components/RegisterForm.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
