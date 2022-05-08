<template>
  <div class="flex flex-col justify-center min-h-full py-12 text-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-3xl font-extrabold text-center text-fgreen">
        Register with email and password
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form
          class="space-y-6"
          @submit.prevent="register()"
          @keypress.enter="submit"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-black">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none placeholder-fgreen focus:outline-none focus:ring-2 focus:border-fpurple focus:ring-fgreen sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-black">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm appearance-none placeholder-fgreen focus:outline-none focus:ring-2 focus:ring-fgreen focus:border-fpurple sm:text-sm"
              />
            </div>
          </div>
          <p class="text-red-600" v-if="error != false">{{ error }}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="w-4 h-4 border-gray-300 rounded text-fgreen focus:ring-fpurple"
              />
              <label for="remember-me" class="block ml-2 text-sm text-black">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <VButton
              variant="secondary"
              size="sm"
              type="submit"
              class="flex justify-center w-full"
            >
              Log in
            </VButton>
          </div>
        </form>
        <p class="pt-6 text-fpurple">
          ¿Ya tienes cuenta?
          <a href="/login" class="text-fgreen hover:underline">Inicia sesión</a>
        </p>
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>

          <div class="flex justify-center py-5">
            <div class="w-1/2">
              <a
                href="#"
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
              >
                <span class="sr-only">Sign in with Google</span>
                <GoogleIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from "@/components/VButton.vue";
import GoogleIcon from "@/icons/GoogleIcon.vue";
import { auth } from "../bd/bd";
import { useRouter } from "vue-router";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref(false);

function register() {
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      console.log("Successfully registered!!");
      error.value = false;
      router.push("/");
    })
    .catch((err) => {
      error.value = err.message;
    });
}
</script>
