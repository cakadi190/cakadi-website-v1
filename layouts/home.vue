<template lang="pug">
div(class="bg-white dark:bg-gray-950 dark:text-gray-400 min-h-screen flex flex-col justify-between")
  div.main-content
    Navbar
    slot

  Footer
</template>
  
<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>
  
<script lang="ts">
export default defineComponent({
  name: 'HomeLayout'
})
</script>