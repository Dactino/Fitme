<template>
  <TheLayout>
    <div class="py-8">
      <div class="flex flex-col gap-8" v-if="!modify">
        <ProfileInfo />
        <VButton class="m-auto" @click="modify = true"> Modificar </VButton>
      </div>
      <div class="flex flex-col gap-8" v-else>
        <ProfileForm @finished="modify = false" />
      </div>
      <ProfileRoutines v-if="auth.currentUser" />
    </div>
  </TheLayout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { isLogged } from "@/bd/auth.js";
import { auth } from "@/bd/bd.js";
import TheLayout from "@/components/TheLayout";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileForm from "@/components/ProfileForm";
import ProfileRoutines from "@/components/ProfileRoutines";
import VButton from "@/components/VButton";

const modify = ref(false);

const router = useRouter();

if (!isLogged) {
  router.push("/");
}
auth.onAuthStateChanged(function (us) {
  if (us) {
    userId.value = us.uid;
  }
});

const userId = ref();
</script>
