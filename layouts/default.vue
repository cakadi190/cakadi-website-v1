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

    header.pt-6#header-banner(class="lg:min-h-[50vh] min-h-[30vh] pt-[5rem] pb-10 lg:pt-[8] flex flex-col justify-center")
      div.text-center(class="container md:text-left mx-auto px-4 md:max-w-7xl items-center flex flex-col md:flex-row gap-2")
        div(class="w-full lg:w-1/2")
          h1.mb-3.font-bold.text-2xl(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", class="lg:text-4xl dark:text-white")
            slot(name="page-title") Heading template
          h2.text-gray-500(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="text-xl dark:text-gray-400")
            slot(name="page-desc") Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam consectetur cupiditate aliquam praesentium. Perferendis eum velit quos id accusamus maxime deleniti in, officia commodi consequatur voluptate tempora vitae recusandae.

    slot
  
  Footer
</template>