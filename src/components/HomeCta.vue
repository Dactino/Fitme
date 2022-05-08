<template>
  <div class="m-auto text-center sm:text-left bg-fpurple">
    <div
      class="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-4xl font-extrabold tracking-tight text-fgreen sm:text-4xl"
      >
        <span class="block">¿Listo para empezar?</span>
        <span class="block pb-1 -mb-1 text-transparent bg-white bg-clip-text"
          >Inicia sesión o regístrate</span
        >
      </h2>
      <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <div class="space-x-2">
          <a href="/login">
            <VButton variant="primary"> Iniciar sesión </VButton></a
          >

          <a href="/register">
            <VButton variant="secondary"> Registrarse </VButton>
          </a>
        </div>
      </div>
    </div>
    <hr class="w-4/5 max-w-3xl m-auto" />
  </div>
</template>

<script setup>
import VButton from "../components/VButton.vue";
</script>
