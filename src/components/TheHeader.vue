<template>
  <Popover class="relative bg-fpurple">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div class="flex items-center justify-between py-6 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Workflow</span>
            <img
              class="w-auto h-10 sm:h-12"
              src="../../public/Logo.png"
              alt=""
            />
          </a>
        </div>
        <div class="" v-if="isLogged">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 rounded-full text-fgreen hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span
              class="inline-block overflow-hidden bg-gray-100 rounded-full h-14 w-14"
            >
              <AvatarIcon class="w-full h-full" />
            </span>
          </PopoverButton>
        </div>
        <div class="flex items-center justify-end flex-1 lg:w-0" v-else>
          <div class="space-x-2">
            <a href="/login">
              <VButton variant="primary"> Iniciar sesión </VButton></a
            >

            <a href="/register">
              <VButton variant="terciary"> Registrarse </VButton>
            </a>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <PopoverPanel
        focus
        class="absolute top-0 right-0 z-50 w-full p-2 transition origin-top-right transform inset-x-50 md:w-1/3"
      >
        <div
          class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="w-auto h-10"
                  src="../../public/Logo.png"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center p-2 bg-white rounded-md text-fgreen hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XCircleIcon class="w-10 h-10" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <router-link
                to="/trainer"
                v-if="isAdmin"
                class="text-xl font-medium text-fgreen hover:text-fgreen-dark1"
              >
                Administración
              </router-link>
              <router-link
                to="/profile"
                v-if="isLogged"
                class="text-xl font-medium text-fgreen hover:text-fgreen-dark1"
              >
                Perfil
              </router-link>
            </div>
            <div v-if="!isLogged">
              <a href="/register" class="flex items-center justify-center">
                <VButton variant="secondary" class="w-full">
                  Registrarse
                </VButton>
              </a>
              <p class="mt-6 text-base font-medium text-center text-gray-500">
                ¿Ya tienes cuenta?
                {{ " " }}
                <a href="/login" class="text-fpurple hover:text-fpurple-dark1">
                  Inicia sesión
                </a>
              </p>
            </div>
            <VButton v-else variant="secondary" @click="logOut">
              Cerrar sesión
            </VButton>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { isLogged, logOut, isAdmin } from "@/bd/auth";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import XCircleIcon from "../icons/XCircleIcon.vue";
import AvatarIcon from "../icons/AvatarIcon.vue";
import { ref } from "vue";
//import { useRouter } from "vue-router";
import VButton from "@/components/VButton.vue";
</script>
