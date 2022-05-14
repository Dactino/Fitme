<template>
  <TheLayout>
    <HomeHero />

    <AboutFitWUs class="mt-8" />

    <h3 class="mt-8 text-4xl font-bold text-fgreen">¿Donde nos encontramos?</h3>
    <div class="w-full m-auto my-8 border-2 border-fpurple">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.20503410871!2d13.348982615764552!3d52.547816041919795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8517e72c16047%3A0x7689b03d5d5170f6!2sBr%C3%BCsseler%20Str.%209%2C%2013353%20Berlin!5e0!3m2!1ses!2sde!4v1652527092399!5m2!1ses!2sde"
        width="600"
        height="450"
        class="w-full p-8 border-2 border-fgreen"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </TheLayout>
</template>

<script setup>
import TheLayout from "@/components/TheLayout";
import HomeHero from "@/components/HomeHero";
import AboutFitWUs from "@/components/AboutFitWUs";
</script>
