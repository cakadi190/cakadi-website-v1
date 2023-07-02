<script setup lang="ts">
import layout from '~/layouts/default.vue'

useHead({
  title: 'Portofolioku'
});
</script>

<template lang="pug">
layout#portofolio
  template(#page-title) Portofolio Saya
  template(#page-desc) Aku cantumkan beberapa karya yang udah aku buat.

  div.container.mx-auto.px-4.py-6.flex-col.gap-6(class="lg:flex-row dark:text-gray-400 md:max-w-7xl flex justify-between", v-motion, :initial="{ y: 100, opacity: 0 }", :enter="{ y: 0, opacity: 1 }")
    .w-full.grid.grid-cols-1.gap-4(class="md:grid-cols-2 lg:grid-cols-3")
      a.border.rounded-xl.overflow-hidden.bg-white.flex.flex-col.w-full.border-gray-300(v-for="i in 21", href="#", class="dark:bg-gray-900 hover:border-green-500 duration-200 transition-all hover:shadow-[0_.5rem_1rem_rgba(0,0,0,0.05)] focus:shadow-md dark:border-gray-700")
        .aspect-ratio-16-9.overflow-hidden.rounded-xl
          img(src="/images/dummy.min.jpg")
        div.px-5.py-4 
          h6.font-bold.text-xl.mb-3.text-gray-700(class="dark:text-gray-300") Test Some Title Okay!
          p.text-gray-500(class="dark:text-gray-400") Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam repudiandae tempora exercitationem nihil aperiam in accusamus.
</template>