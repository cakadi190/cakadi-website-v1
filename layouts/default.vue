<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<script lang="ts">
export default defineComponent({
  name: 'PageLayout'
})
</script>

<template lang="pug">
div(class="bg-white dark:bg-gray-950 dark:text-gray-400 min-h-screen flex flex-col justify-between")
  div.main-content
    Navbar

    header.pt-6#header-banner(class="md:min-h-[50vh] min-h-[30vh] pt-[5rem] pb-10 md:pt-[8] flex flex-col justify-center")
      div(class="container mx-auto px-4 lg:max-w-7xl flex flex-col gap-2")
        div(class="w-full md:w-1/2")
          h1.mb-3.font-bold.text-2xl(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", class="md:text-4xl dark:text-white")
            slot(name="page-title") Heading template
          p.text-gray-500(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="text-xl dark:text-gray-400")
            slot(name="page-desc") Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam consectetur cupiditate aliquam praesentium. Perferendis eum velit quos id accusamus maxime deleniti in, officia commodi consequatur voluptate tempora vitae recusandae.

    slot
  
  Footer
</template>