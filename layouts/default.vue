<template lang="pug">
div(class="bg-white dark:bg-gray-950 dark:text-gray-400 min-h-screen flex flex-col justify-between")
  div.main-content
    Navbar

    header.pt-6#header-banner(class="md:min-h-[50vh] min-h-[30vh] pt-24 pb-10 md:pt-[8] flex flex-col justify-center")
      div(class="container mx-auto px-4 lg:max-w-7xl flex flex-col gap-2")
        div(class="w-full md:w-2/3")
          h1.mb-3.font-bold.text-2xl(class="md:text-4xl dark:text-white")
            slot(name="page-title") Heading template
          p.text-gray-500(class="text-xl dark:text-gray-400")
            slot(name="page-desc") Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam consectetur cupiditate aliquam praesentium. Perferendis eum velit quos id accusamus maxime deleniti in, officia commodi consequatur voluptate tempora vitae recusandae.

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