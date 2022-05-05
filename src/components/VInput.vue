<template>
  <input
    :type="type"
    v-model="varValue"
    :name="name"
    :placeholder="placeholder"
    @input="changing"
    class="border-2 rounded-2xl border-fgreen text-fpurple"
  />
  {{ value }}
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "name",
  },
  placeholder: {
    type: String,
    default: "Write here",
  },
  propValue: {
    default: null,
  },
});

const varValue = "";

function changing() {
  console.log(varValue);
}
</script>
