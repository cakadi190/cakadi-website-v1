<script setup lang="ts">
import layout from '~/layouts/default.vue'

useHead({
  title: 'Kredit dan Atribusi'
});
</script>

<template lang="pug">
layout#career
  template(#page-title) Kredit dan Atribusi
  template(#page-desc) Terimakasih buat semuanya yang telah membantu saya dalam membuat web ini.

  section.pb-16.pt-6.gap-2.text-slate-500(class="dark:text-slate-400")
    div(class="container sm:text-left mx-auto px-4 sm:max-w-7xl justify-between flex flex-col-reverse md:flex-row gap-6 lg:gap-12")
      div.w-full(class="md:w-3/4")
        div(class="lg:pl-20 border-l border-transparent lg:border-slate-200 dark:lg:border-slate-800") 
          
          h3.font-bold.mb-5.text-3xl.relative.group.-mt-20.pt-20.flex.items-center.gap-4(class="hover:lg:-ml-12", id="sponsor")
            a(class="hidden group-hover:lg:flex font-normal rounded w-8 h-8 bg-slate-100 border border-slate-200 justify-center dark:bg-gray-900 dark:border-gray-800 items-center", href="#sponsor") #
            span Sponsor

          blockquote
            p.mb-3 &mdash; Hmm... masih belum ada sponsor.

          .p-4(class="bg-sky-500/[.25] text-sky-600 rounded-md border-sky-500/[.25] border") 
            h6.text-xl.font-bold.mb-2 Informasi
            p Saat ini saya belum membuka sponsor, karena masih dalam tahap pengajuan.

          hr.border-slate-200.pb-12.mt-12(class="dark:border-slate-700")
          
          h3.font-bold.mb-5.text-3xl.relative.group.-mt-20.pt-20.flex.items-center.gap-4(class="hover:lg:-ml-12", id="kontributor")
            a(class="hidden group-hover:lg:flex font-normal rounded w-8 h-8 bg-slate-100 border border-slate-200 justify-center dark:bg-gray-900 dark:border-gray-800 items-center", href="#kontributor") #
            span Kontributor

          blockquote
            p.mb-3 &mdash; Hmm... masih belum ada kontributor.

          .p-4(class="bg-sky-500/[.15] text-sky-600 rounded-md border-sky-500/[.25] border") 
            h6.text-xl.font-bold.mb-2 Informasi
            p Saat ini saya belum membuka kontributor proyek CV online ini. Nantikan update selanjutnya (perkiraan di versi 1.0.0-rc).

          hr.border-slate-200.pb-12.mt-12(class="dark:border-slate-700")

      div.w-full(class="md:w-1/4 lg:-mt-16") 
        .bg-white.top-0.border.border-gray-200(class="md:sticky md:top-20 lg:top-16 dark:border-gray-800 dark:bg-gray-900 rounded-lg")
          div.font-bold.px-5.py-4.border-b.border-gray-200(class="dark:border-gray-800") Tabel Konten
          div.my-2
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#sponsor") Sponsor
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#kontributor") Kontributor
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#atribusi") Terima Kasih Yang Banyak!
</template>