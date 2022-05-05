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
    </div>
  </TheLayout>
</template>

<script setup>
import { ref } from "vue";
import TheLayout from "@/components/TheLayout";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileForm from "@/components/ProfileForm";
import VButton from "@/components/VButton";

const modify = ref(false);
</script>
