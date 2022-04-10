<template>
  <button
    :class="[...variantStyle(), ...sizeStyle()]"
    class="inline-block text-xl font-bold border-2 rounded-2xl focus:outline-none"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "sm",
  },
  variant: {
    type: String,
    default: "primary",
  },
});
function variantStyle() {
  switch (props.variant) {
    case "primary":
      return [
        "text-fpurple",
        "bg-white",
        "border-fgreen",
        "hover:bg-fgreen",
        "hover:border-white",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-fgreen",
      ];
    case "secondary":
      return [
        "text-white",
        "bg-fpurple",
        "border-fgreen",
        "hover:bg-fgreen",
        "hover:border-fpurple",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-fpurple",
      ];
    case "terciary":
      return [
        "text-fgreen",
        "bg-white",
        "border-fpurple",
        "hover:bg-fpurple",
        "hover:border-white",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-fpurple",
      ];
  }
}
function sizeStyle() {
  switch (props.size) {
    case "sm":
      return ["py-1 px-4"];
    case "md":
      return ["py-2 px-6"];
    case "lg":
      return ["py-3 px-8"];
  }
}
</script>
