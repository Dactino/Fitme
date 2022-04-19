<template>
  <TheHeader />
  <div class="object-cover object-top w-1/6 h-auto px-8 m-auto mt-5">
    <a href="/"> <img src="../../public/Logo.png" alt="" class="" /></a>
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
import TheHeader from "@/components/TheHeader.vue";
</script>
