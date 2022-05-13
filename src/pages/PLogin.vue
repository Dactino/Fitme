<template>
  <div class="object-cover object-top w-1/2 h-auto px-8 m-auto mt-5 md:w-1/4">
    <a href="/">
      <img src="../../public/Logo.png" alt="" class="hover:opacity-80"
    /></a>
  </div>
  <div class="py-12 lg:grid lg:grid-cols-2">
    <LoginForm />
    <SesionDetails />
  </div>
  <TheFooter />
</template>

<script setup>
import { useRouter } from "vue-router";
import { auth } from "@/bd/bd";
import LoginForm from "@/components/LoginForm.vue";
import SesionDetails from "@/components/SesionDetails.vue";
import TheFooter from "@/components/TheFooter.vue";
import ListIcon from "@/icons/ListIcon.vue";
import DocumentAddIcon from "@/icons/DocumentAddIcon.vue";

const router = useRouter();

auth.onAuthStateChanged((us) => {
  if (us) {
    router.push("/");
  }
});
</script>
