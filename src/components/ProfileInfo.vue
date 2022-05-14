<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-xl font-medium leading-6 text-fgreen">
        Información personal
      </h3>
      <p class="max-w-2xl mt-1 text-sm text-fpurple">Detalles del perfil</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-fgreen">Nombre</dt>
          <dd class="mt-1 text-sm text-fpurple sm:mt-0 sm:col-span-2">
            {{ name }}
          </dd>
        </div>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-fgreen">Correo electrónico</dt>
          <dd class="mt-1 text-sm text-fpurple sm:mt-0 sm:col-span-2">
            {{ email }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { auth } from "@/bd/bd";
import { ref } from "vue";

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
</script>
