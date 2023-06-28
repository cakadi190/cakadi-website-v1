<script setup lang="ts">
interface ErrorInterface {
  statusMessage?: string;
  message?: string;
  statusCode?: number;
}

const props = defineProps<{
  error: ErrorInterface;
}>();

const computedTitle = computed(() => {
  if (props.error.statusCode === 404) return 'Sorry, Page Not Found';
  else return 'Woops! An Error Occurred!';
});

useHead({
  title: computedTitle,
});
</script>

<template>
  <main class="flex justify-center items-center min-h-screen dark:bg-gray-950 bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" class="font-semibold text-5xl text-green-600">{{ props.error.statusCode }}</p>
      <h1 v-motion :initial="{ opacity: 0, x: -100 }" :enter="{ opacity: 1, x: 0 }" class="mt-4 text-3xl font-bold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">{{ props.error.statusCode !== 404 ? 'Woops, An Error Occured!' : 'Sorry, page not found' }}</h1>
      <p v-motion :initial="{ opacity: 0, x: -100 }" :enter="{ opacity: 1, x: 0 }" class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">{{ props.error?.statusCode === 404 ? 'Sorry, I couldn\'t find the page you\'re looking for.' : props.error.message }}</p>
      <div v-motion :initial="{ opacity: 0, x: 100 }" :enter="{ opacity: 1, x: 0 }" class="mt-10 flex items-center justify-center gap-x-6">
        <router-link v-if="props.error.statusCode === 404" :to="{ name: 'index' }" class="transition-all duration-200 rounded-md bg-green-600 px-4 py-2.5 text-sm text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Go back home</router-link>
        <a href="mailto:me@cakadi.my.id" class="flex gap-2 items-center transition-all duration-200 text-sm text-gray-900 dark:text-gray-300">Contact Me<i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </main>
</template>