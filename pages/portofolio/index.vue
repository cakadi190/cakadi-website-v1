<script setup lang="ts">
import layout from '~/layouts/default.vue'

useHead({
  title: 'Portofolioku',
  meta: [
    { key: 'description', name: 'description', content: 'Ini adalah daftar proyek dan karya yang sudah aku buat akhir-akhir ini.' },
    { key: 'og:canonical', name: 'canonical', content: 'https://www.cakadi.eu.org/portofolio' },
    
    { key: 'og:url', name: 'og:url', content: 'https://www.cakadi.eu.org/portofolio' },
    { key: 'og:description', name: 'og:description', content: 'Ini adalah daftar proyek dan karya yang sudah aku buat akhir-akhir ini.' },
  ],
});

const { data } = await useAsyncData(
  () => $fetch('/api/portofolio'),
);
</script>

<template lang="pug">
layout#portofolio
  template(#page-title) Portofolio Saya
  template(#page-desc) Aku cantumkan beberapa karya yang udah aku buat.

  div.container.mx-auto.px-4.py-6.flex-col.gap-6(class="lg:flex-row dark:text-gray-400 md:max-w-7xl flex justify-between", v-motion, :initial="{ y: 100, opacity: 0 }", :enter="{ y: 0, opacity: 1 }")
    .w-full.grid.grid-cols-1.content-stretch.gap-4(class="md:grid-cols-2 lg:grid-cols-3")
      router-link.border.rounded-xl.outline-0.outline-none.overflow-hidden.bg-white.flex.flex-col.w-full.border-gray-300(v-for="(data, index) in data", :to="`/portofolio/${data.id}`", class="dark:bg-gray-900 hover:border-green-500 duration-200 transition-all hover:shadow-[0_.5rem_1rem_rgba(0,0,0,0.05)] focus:shadow-md dark:border-gray-700")
        .aspect-ratio-16-9.overflow-hidden.rounded-xl.border-b.border-gray-300(class="dark:border-gray-700")
          img(loading="lazy", :src="data.image")
        div.px-5.py-4 
          .flex.gap-4.justify-between
            h6.font-bold.truncate.text-xl.mb-1.text-gray-700(class="dark:text-gray-300") {{ data.name }}
            div 
              div.text-xs.px-2.py-1.rounded-md.bg-yellow-400.text-white(v-if="data.category == 'web'") Website
              div.text-xs.px-2.py-1.rounded-md.bg-sky-500.text-white(v-if="data.category == 'design'") Desain Grafis
              div.text-xs.px-2.py-1.rounded-md.bg-red-500.text-white(v-if="data.category == 'mobile'") Mobile Apps
          p.text-gray-500(class="dark:text-gray-400") {{ data.shortDesc }}
          .flex.gap-2.mt-4.items-center
            Icon(:name="`devicon:${stack}`", v-for="stack in data.techStack", size="20")
</template>