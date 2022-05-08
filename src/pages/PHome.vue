<template>
  <HomeHero />

  <HomeFeatures :features="features" />

  <HomeExplication
    v-for="feature in features"
    :key="feature.name"
    :feature="feature"
  />

  <HomeCta />

  <TheFooter />
</template>

<script setup>
import HomeHero from "@/components/HomeHero.vue";
import HomeExplication from "@/components/HomeExplication.vue";
import HomeFeatures from "@/components/HomeFeatures.vue";
import HomeCta from "@/components/HomeCta.vue";
import TheFooter from "@/components/TheFooter.vue";
import EasyIcon from "../icons/EasyIcon.vue";
import QuickIcon from "../icons/QuickIcon.vue";
import ShieldIcon from "../icons/ShieldIcon.vue";
import EffectiveIcon from "../icons/EffectiveIcon.vue";

const features = [
  {
    name: "Fácil",
    icon: EasyIcon,
    img: "easy.png",
    right: false,
    description:
      "¡Visualiza todas las rutinas y guárdate las que más te gusten con un solo click! Así de fácil es empezar tu nuevo entrenamiento",
  },
  {
    name: "Gratis",
    icon: QuickIcon,
    img: "free.jpeg",
    right: true,
    description:
      "Rutinas de expertos totalmete gratis al alcance de tu mano. ¡Ya no tienes excusas para no empezar a entrenar!",
  },
  {
    name: "Confiable",
    icon: ShieldIcon,
    img: "reliable.jpeg",
    right: false,
    description:
      "Cuando guardes o modifiques una rutina, estará a tu única disposición desde la página de tu perfil",
  },
  {
    name: "Efectivo",
    icon: EffectiveIcon,
    img: "home_hero_3.jpeg",
    right: true,
    description:
      "Con un poco de esfuerzo y dedicación, ¡gracias a nuestra ayuda notarás los efectos del ejercicio!",
  },
];
</script>
