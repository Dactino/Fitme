<template>
  <div class="m-auto text-center sm:text-left bg-fpurple">
    <div
      class="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-4xl font-extrabold tracking-tight text-fgreen sm:text-4xl"
      >
        <span class="block">Ready to get started?</span>
        <span class="block pb-1 -mb-1 text-transparent bg-white bg-clip-text"
          >Get in touch or create an account.</span
        >
      </h2>
      <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <a href="#" class="flex items-center justify-center">
          <VButton variant="primary"> Contact us </VButton>
        </a>
        <a href="/categories" class="flex items-center justify-center">
          <VButton variant="secondary"> Get started </VButton>
        </a>
      </div>
    </div>
    <hr class="w-4/5 max-w-3xl m-auto" />
  </div>
</template>

<script setup>
import VButton from "../components/VButton.vue";
</script>
