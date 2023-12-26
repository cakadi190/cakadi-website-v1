<script setup lang="ts">
const layout = ref();

useHead({
  titleTemplate: (title) => {
    return title ? `${title} • Cak Adi` : 'Cak Adi';
  },
});
</script>

<template>
  <NuxtLoadingIndicator :height="4" :throttle="0" />
  <NuxtLayout ref="layout" />
  <NuxtPage />
</template>
