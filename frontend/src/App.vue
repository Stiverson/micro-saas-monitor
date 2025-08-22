<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Micro-SaaS Monitor</h1>
      <button @click="themeStore.toggleDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <span v-if="themeStore.isDarkMode" class="text-white">☀️</span>
        <span v-else class="text-gray-800">🌙</span>
      </button>
    </header>

    <main class="flex-grow p-4">
      <RouterView />
    </main>

    <footer class="bg-white dark:bg-gray-800 text-center p-4 text-gray-600 dark:text-gray-400">
      © 2025 Micro-SaaS Monitor. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useThemeStore } from './stores/theme'; // Importa a store do Pinia

const themeStore = useThemeStore();
</script>

<style scoped>
/* Estilos específicos do componente */
</style>