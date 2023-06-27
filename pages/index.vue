<script setup lang="ts">
import home from '~/layouts/home.vue'
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

definePageMeta({
  layout: 'home'
})

useHead({
  title: 'Beranda',
  meta: [
    { key: 'description', name: 'description', content: 'Web Resmi Amir Zuhdi Wibowo yang mana adalah seorang Fullstack Web Developer yang suka desain dan atau semua hal yang berbau teknologi.' },
    { key: 'og:canonical', name: 'canonical', content: 'https://www.cakadi.eu.org' },
    
    { key: 'og:url', name: 'og:url', content: 'https://www.cakadi.eu.org' },
    { key: 'og:description', name: 'og:description', content: 'Web Resmi Amir Zuhdi Wibowo yang mana adalah seorang Fullstack Web Developer yang suka desain dan atau semua hal yang berbau teknologi.' },
  ]
})

const callsign: TypedOptions = {
  strings: ["Cak Adi", "Mas Adi", "Mas Amir", "Kak Amir", "Kak Adi", "Amir", "Adi", "Dek Amir", "Dek Adi"],
  loop: true,
  typeSpeed: 50,
};

const role: TypedOptions = {
  strings: ["Mahasiswa", "Fullstack WebDev", "Desainer Grafis", "UI/UX Desainer", "Ameteur Photographer"],
  loop: true,
  typeSpeed: 50,
};
</script>

<template lang="pug">
home
  header.pt-20.flex.flex-col.justify-center.min-h-screen#header-banner(class="md:py-6")
    div.text-center(class="container md:text-left mx-auto px-4 md:max-w-7xl items-center flex flex-col md:flex-row gap-2")
      div.w-full.mb-4(class="lg:w-3/5 md:w-1/2 lg:mb-0")
        p.text-xl.mb-2.text-green-700.font-light(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="dark:text-green-500") Halo rek! 👋 Perkenalkan, Aku...
        h1.text-4xl.font-bold.pb-3.text-gray-700(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", class="lg:pb-1 lg:text-6xl dark:text-gray-300", title="Cak Adi")
          span.text-green-500.underline.underline-offset-4 A
          | mir
          | Zuh
          span.text-green-500.underline.underline-offset-4 di
          | &nbsp;Wibowo,
        typed(:options='callsign', v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50")
          h2.text-gray-400.pb-3
            | Bisa dan biasa dipanggil 
            span.typing
          
        typed(:options='role', v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50")
          p.text-lg.text-gray-500(class="lg:text-2xl dark:text-gray-400") Seorang 
            span.font-bold.text-gray-700.typing(class="dark:text-gray-300")
            |  berbasis di Kota Kabupaten Ngawi yang suka sekali dengan 
            span.font-bold.text-gray-700(class="dark:text-gray-300") desain 
            | dan juga hal yang berbau 
            span.font-bold.text-gray-700(class="dark:text-gray-300") teknologi.
        
        .pt-6.flex.gap-2.justify-center(class="md:justify-start", v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50")
          router-link.px-4.text-lg.py-2.outline-0.outline-none.duration-200.transition-all.rounded-md.text-white.bg-green-500.flex.gap-2.items-center(class="hover:bg-green-600 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2 dark:focus:ring-offset-gray-950", :to="{ name: 'kontak-saya' }")
            i.fas.fa-phone.text-sm
            span Hubungi Saya
          a.px-4.text-lg.py-2.outline-0.outline-none.duration-200.transition-all.rounded-md.text-gray-500.items-center.flex.gap-2(class="hover:bg-green-600 focus:ring-2 dark:text-white hover:text-white focus:ring-green-500/[.75] focus:ring-offset-2 dark:focus:ring-offset-gray-950", href="https://s.id/cvnyaCakAdi") 
            i.fas.fa-file-pdf.text-sm
            span Resume

        .mt-4(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="lg:mt-8")
          p.text-lg.mb-2.text-gray-500(class="lg:text-xl dark:text-gray-400")
            em Tech Stack 
            | Andalan
          .flex.gap-3.justify-center.items-center(class="md:justify-start lg:gap-4")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/laravel.svg", :style="{ height: '32px' }")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/bootstrap.svg", :style="{ height: '32px' }")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/vuejs.svg", :style="{ height: '32px' }")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/nuxtjs.svg", :style="{ height: '32px' }")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/wordpress.svg", :style="{ height: '32px' }")
            .border-l.h-6.border-gray-300(class="dark:border-gray-600")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/vscode.svg", :style="{ height: '32px' }")
            img.grayscale(class="hover:grayscale-0 transition-all duration-200", src="/images/favourite-stack/figma.svg", :style="{ height: '32px' }")
      div.w-full(class="lg:w-2/5 md:w-1/2") 
        img.w-full(src="/images/fotoku.min.png")

  section.py-20#about-me
    div(class="container lg:text-left mx-auto px-4 lg:max-w-7xl items-center justify-center flex flex-col lg:flex-row gap-2")
      blockquote.text-4xl.flex.gap-4.text-gray-500(class="lg:text-5xl dark:text-gray-400") 
        div.text-8xl(class="lg:text-9xl") &#34;
        div.flex.flex-col.gap-2.w-full(class="lg:gap-4")
          div Eling, Kuat
          div.w-full(class="lg:text-6xl flex items-center gap-3 italic font-bold") 
            span.mt-1.w-16.rounded-full.bg-slate-400(class='h-0.5 lg:h-1 lg:w-24 dark:bg-slate-500')
            span(class="text-slate-700 dark:text-slate-300") Slamet!
            span.mt-1.w-16.rounded-full.bg-slate-400(class='h-0.5 lg:h-1 lg:w-24 dark:bg-slate-500')
          div.text-3xl.text-left(class="lg:text-4xl lg:text-right") &amp; 
            strong.text-slate-700(class="dark:text-slate-300") Eling 
            |  Lan 
            strong.text-slate-700(class="dark:text-slate-300") Waspodo
          div.text-gray-500.text-base(class="dark:text-gray-400") Batara Ismaya Batara Iswara Jurudyah Punta Prasanta Semar
</template>