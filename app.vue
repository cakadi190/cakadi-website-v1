<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Cak Adi • ${titleChunk}` : 'Cak Adi';
  },
  meta: [
    { name: 'og:image', key: 'og:image', content: '/images/va-ogImg.png' },
  ]
})

// MotionPlugin
import { MotionPlugin } from '@vueuse/motion'
const nuxtApp = useNuxtApp();
nuxtApp.vueApp.use(MotionPlugin)
</script>

<style lang="postcss">
#header-banner {
  @apply bg-gradient-to-b from-gray-100 dark:from-gray-900;
}

html {
  scroll-behavior: smooth;
}

/* Lebar scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}

/* Warna latar belakang track scrollbar */
::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-900;
}

/* Warna thumb scrollbar saat tidak dihover */
::-webkit-scrollbar-thumb {
  @apply dark:bg-gray-700 bg-gray-200;
}

/* Warna thumb scrollbar saat dihover */
::-webkit-scrollbar-thumb:hover {
  @apply dark:bg-gray-600 bg-gray-300;
}
</style>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
