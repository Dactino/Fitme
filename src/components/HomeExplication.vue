<template>
  <div class="relative pt-16 pb-32 overflow-hidden">
    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48" />
    <div class="relative">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
        >
          <div>
            <div>
              <span
                class="flex items-center justify-center w-12 h-12 rounded-md bg-fpurple"
              >
                <MenuIcon class="w-6 h-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <!-- 
                Por qué la página es fácil, rápida, segura y efectiva 
                Hay que poner imagenes del resultado final de las rutinas
            -->
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Stay on top of customer support
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra
                at. Lectus viverra dui tellus ornare pharetra.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r fpurple bg-origin-border hover er:to-fpurple"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div class="pt-6 mt-8 border-t border-gray-200">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                  diam. Sit orci risus aenean curabitur donec aliquet. Mi
                  venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
        >
          <div>
            <div>
              <span
                class="flex items-center justify-center w-12 h-12 rounded-md bg-fpurple"
              >
                <MenuIcon class="w-6 h-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Better understand your customers
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra
                at. Lectus viverra dui tellus ornare pharetra.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-fpurple"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div
            class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuIcon from "../icons/MenuIcon.vue";
</script>
