<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-fgreen">
        Información personal
      </h3>
      <p class="max-w-2xl mt-1 text-sm text-fpurple">Detalles del perfil</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-fpurple">Nombre</dt>
          <input
            type="text"
            v-model="name"
            class="mt-1 text-sm text-fgreen-dark1 border-fpurple sm:mt-0 sm:col-span-2"
          />
          <VButton @click="updateName(name), $emit('finished')"
            >Actualizar</VButton
          >
        </div>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-fpurple">Correo electrónico</dt>
          <input
            type="email"
            v-model="email"
            class="mt-1 text-sm text-fgreen-dark1 border-fpurple sm:mt-0 sm:col-span-2"
          />
          <VButton @click="updateMail(email), $emit('finished')"
            >Actualizar</VButton
          >
        </div>
      </dl>
    </div>
  </div>
  <VButton @click="$emit('finished')" class="m-auto">Cancelar</VButton>
</template>

<script setup>
import { updateName, updateMail } from "@/bd/auth";
import { auth } from "@/bd/bd";
import { ref } from "vue";
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";

auth.onAuthStateChanged(function (us) {
  if (us) {
    profile.value = us;
    name.value = us.displayName;
    email.value = us.email;
  } else {
    profile.value = {
      displayName: "Anonimous",
      email: "Anonimous",
      uid: "Anonimous",
    };
  }
});

const profile = ref();
const name = ref();
const email = ref();

function checkUpdate() {
  if (
    email.value.toLowerCase() == "" ||
    name.value.toLowerCase() == "" ||
    email.value.toLowerCase
  ) {
    console.log("No puedes dejar campos vacíos");
  } else {
    updateName(name);
  }
}

function check() {}
</script>
