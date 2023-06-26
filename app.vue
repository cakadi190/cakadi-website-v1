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
</style>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
