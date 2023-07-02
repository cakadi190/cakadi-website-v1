<script setup lang="ts">
import layout from '~/layouts/default.vue'

useHead({
  title: 'Kredit dan Atribusi',
  meta: [
    { key: 'description', name: 'description', content: 'Terimakasih kepada semua pendukung, sponsor dan juga kontributor yang telah membantu dan memberikan semua inspirasi dalam membuat web saya ini.' },
    { key: 'og:description', name: 'og:description', content: 'Terimakasih kepada semua pendukung, sponsor dan juga kontributor yang telah membantu dan memberikan semua inspirasi dalam membuat web saya ini.' },
  ]
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

          .p-4(class="bg-sky-500/[.15] text-sky-600 rounded-md border-sky-500/[.25] border") 
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
          
          h3.font-bold.mb-5.text-3xl.relative.group.-mt-20.pt-20.flex.items-center.gap-4(class="hover:lg:-ml-12", id="atribusi")
            a(class="hidden group-hover:lg:flex font-normal rounded w-8 h-8 bg-slate-100 border border-slate-200 justify-center dark:bg-gray-900 dark:border-gray-800 items-center", href="#atribusi") #
            span Terimakasih! 😁👍

          p.pb-6 Aku sangat berterimakasih kepada semua pihak yang udah bantu bikin web ini, mulai inspirasi sampai aset gambarnya. Terutama kepada:

          ul.flex.flex-col.gap-4
            li.flex.gap-4(class="md:gap-6")
              Icon(name="fa6-solid:square").text-base
              div
                | Semua&nbsp;
                a.text-green-600(class="dark:text-green-500", href="#sponsor") Sponsor
                | ;&nbsp;
                a.text-green-600(class="dark:text-green-500", href="#kontributor") Kontributor
                | ;&nbsp;elemen dari grup programmer&nbsp;
                a.text-green-600(class="dark:text-green-500", href="https://instagram.com/uniicode.id?igshid=MzRlODBiNWFlZA==") Uniicode
                | , Forum Linux Indonesia, GNU/Weeb dan grup programmer lainnya.
            li.flex.gap-4(class="md:gap-6")
              Icon(name="fa6-solid:square").text-base
              div
                | CSS Library dari&nbsp;
                a.text-green-600(class="dark:text-green-500", href="https://tailwindcss.com") TailwindCSS
                | &nbsp;dan Framework Web dari&nbsp;
                a.text-green-600(class="dark:text-green-500", href="https://nuxt.com") NuxtJS
                | .
            li.flex.gap-4(class="md:gap-6")
              Icon(name="fa6-solid:square").text-base
              div
                | Emoji dari&nbsp;
                a.text-green-600(class="dark:text-green-500", href="https://github.com/microsoft/fluentui-emoji") Microsoft Fluent Emoji
                | .
            li.flex.gap-4(class="md:gap-6")
              Icon(name="fa6-solid:square").text-base
              div
                | Dummy Photo by 
                a.text-green-600(class="dark:text-green-500", href='https://unsplash.com/@reneporter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText') Ren&eacute; Porter
                |  on 
                a.text-green-600(class="dark:text-green-500", href='https://unsplash.com/s/photos/sample?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText') Unsplash
                | .

            li.flex.gap-4(class="md:gap-6")
              Icon(name="fa6-solid:square").text-base
              div
                h6.font-bold.text-gray-600.mb-3(class="dark:text-gray-200") 
                  a(href="https://enji.dev") Web Mas Enji
                  span.text-gray-400 &nbsp;dan 
                  a(href="https://theodorusclarence.com/") Web Mas Theo
                p Terimakasih kepada Mas Enji dan Mas Theo yang udah bikin web kece badai yang bikin aku terkesima dan terinspirasi dari masnya.
            li.flex.gap-4(class="md:gap-6")
              Icon(name="fa6-solid:square").text-base
              div
                | Dan semua komunitas sumber terbuka&nbsp;
                a.text-green-600(class="dark:text-green-500", target="_blank", href="https://github.com/cakadi190/cakadi-website/blob/main/package.json") pada perkakas ini
                | .

      div.w-full(class="md:w-1/4 z-20 lg:-mt-16") 
        .bg-white.top-0.border.border-gray-200(class="sticky md:top-20 lg:top-16 dark:border-gray-800 dark:bg-gray-900 rounded-lg")
          div.font-bold.px-5.py-4.border-b.border-gray-200(class="dark:border-gray-800") Tabel Konten
          div.my-2
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#sponsor") Sponsor
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#kontributor") Kontributor
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#atribusi") Terima Kasih Yang Banyak!
</template>