<template>
  <div class="grid grid-cols-1 gap-2">
    <div
      v-for="person in people"
      :key="person.email"
      class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div class="flex-shrink-0">
        <img class="w-10 h-10 rounded-full" :src="person.imageUrl" alt="" />
      </div>
      <div class="flex-1 min-w-0">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ person.name }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ person.role }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
