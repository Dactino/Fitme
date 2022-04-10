<template>
  <Popover class="relative bg-fpurple">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
      >
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
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div
          class="items-center justify-end hidden space-x-2 md:flex md:flex-1 lg:w-0"
        >
          <VButton variant="primary"> Sign in </VButton>
          <VButton variant="terciary"> Sign up </VButton>
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
        class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
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
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div v-if="!isLoggedIn">
              <a href="/register" class="flex items-center justify-center">
                <VButton variant="secondary" class="w-full"> Sign up </VButton>
              </a>
              <p class="mt-6 text-base font-medium text-center text-gray-500">
                Existing customer?
                {{ " " }}
                <a href="/login" class="text-fpurple hover:text-fpurple-dark1">
                  Sign in
                </a>
              </p>
            </div>
            <VButton v-else variant="secondary" @click="logOut">
              Log out
            </VButton>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import XCircleIcon from "../icons/XCircleIcon.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import { ref } from "vue";
import firebase from "firebase/compat/app";
//import { useRouter } from "vue-router";
import VButton from "./VButton.vue";

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

//Logout and control of the login

//const router = useRouter();

const isLoggedIn = ref(true);

// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});
const logOut = () => {
  firebase.auth().signOut();
};
</script>
