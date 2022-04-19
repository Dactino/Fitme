<template>
  <div class="relative">
    <!-- Decorative image and overlay -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <img
        src="../../public/home_hero_2.jpeg"
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
        New arrivals are here
      </h1>
      <p class="text-xl text-white">
        The new arrivals have, well, newly arrived. Check out the latest options
        from our summer small-batch release while they're still in stock.
      </p>
      <div class="flex-col space-x-0 space-y-2 lg:space-x-32 md:space-x-6">
        <a href="/routines" class="inline-block text-base font-medium"
          ><VButton variant="primary"> Get Started </VButton></a
        >
        <a href="#" class="inline-block text-base font-medium"
          ><VButton variant="secondary"> Read more </VButton></a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from "../components/VButton.vue";
</script>
