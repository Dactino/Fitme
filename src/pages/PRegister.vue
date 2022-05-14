<template>
  <div class="object-cover object-top w-1/2 h-auto px-8 m-auto mt-5 md:w-1/4">
    <router-link to="/">
      <img src="../../public/Logo.png" alt="" class="hover:opacity-80"
    /></router-link>
  </div>
  <div class="py-12 lg:grid lg:grid-cols-2">
    <SesionDetails />
    <div class="lg:border-l-2 lg:border-l-fpurple">
      <RegisterForm />
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
import { useRouter } from "vue-router";
import { auth } from "@/bd/bd";
import RegisterForm from "@/components/RegisterForm.vue";
import SesionDetails from "@/components/SesionDetails.vue";
import TheFooter from "@/components/TheFooter.vue";

const router = useRouter();

auth.onAuthStateChanged((us) => {
  if (us) {
    router.push("/");
  }
});
</script>
