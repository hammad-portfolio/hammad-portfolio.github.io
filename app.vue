<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header class="container mx-auto flex justify-between px-4 py-8">
    <nav class="flex items-center">
      <NuxtLink v-if="!isHome" to="/">Home</NuxtLink>
    </nav>
    <img alt="Hammad logo" class="logo" src="@/assets/logo.png" width="64" height="64" />
  </header>
  <main class="min-h-full">
      <NuxtPage />
  </main>
  <footer>
    <div class="container mx-auto text-gray-500">
      <div class="flex justify-between px-4 py-12 text-xs">
        <div>&copy; 2023</div>
        <div>Content & Design: Alesandra Hammad</div>
      </div>
    </div>
  </footer>
</template>
