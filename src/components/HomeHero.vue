<template>
  <div class="relative">
    <!-- Decorative image and overlay -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/fitme-750c0.appspot.com/o/home_hero_2.jpeg?alt=media&token=628aaa6d-a72c-47fc-a774-649cb35c118c"
        alt=""
        class="object-cover object-top w-full h-full"
      />
    </div>
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50" />
    <div
      class="relative flex flex-col items-center max-w-3xl px-6 py-16 mx-auto space-y-5 text-center sm:py-32 lg:px-0"
    >
      <img src="../../public/Logo.png" />
      <h1
        class="text-4xl font-extrabold tracking-tight text-fgreen lg:text-6xl"
      >
        No más excusas
      </h1>
      <p class="text-xl text-white">
        Ponte en forma gracias a las rutinas creadas por nuestros expertos de
        forma gratuita o crea tus propias rutinas
      </p>
      <div class="flex-col space-x-0 space-y-2 lg:space-x-32 md:space-x-6">
        <a href="/categories" class="inline-block text-base font-medium"
          ><VButton variant="secondary"> Empezar </VButton></a
        >
        <VButton @click="more.readMore" variant="primary"> Leer más </VButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from "../components/VButton.vue";

const more = {
  readMore() {
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
  },
};
</script>
