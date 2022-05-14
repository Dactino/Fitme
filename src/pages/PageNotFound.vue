<template>
  <div class="flex flex-col min-h-full pt-16 pb-12 bg-white">
    <main
      class="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="flex justify-center flex-shrink-0">
        <router-link to="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <img
            class="w-auto h-50 hover:opacity-80"
            src="../../public/Logo.png"
            alt="Fitme Logo"
          />
        </router-link>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold tracking-wide uppercase text-fpurple">
            404 error
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold tracking-tight text-fgreen sm:text-5xl"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <a
              href="/"
              class="text-base font-medium text-fpurple hover:underline hover:text-fpurple-dark1"
              >Go back home<span aria-hidden="true"> &rarr;</span></a
            >
          </div>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a
          href="#"
          class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Contact Support</a
        >
        <span
          class="inline-block border-l border-gray-300"
          aria-hidden="true"
        />
        <a
          href="#"
          class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Status</a
        >
        <span
          class="inline-block border-l border-gray-300"
          aria-hidden="true"
        />
        <a
          href="#"
          class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Twitter</a
        >
      </nav>
    </footer>
  </div>
</template>

<script setup></script>
