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
    name: "Easy",
    icon: EasyIcon,
    right: false,
    description:
      "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
  },
  {
    name: "Quick",
    icon: QuickIcon,
    right: true,
    description:
      "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
  },
  {
    name: "Reliable",
    icon: ShieldIcon,
    right: false,
    description:
      "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
  },
  {
    name: "Effective",
    icon: EffectiveIcon,
    right: true,
    description:
      "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.",
  },
];
</script>
