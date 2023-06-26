<script setup lang="ts">
import layout from '~/layouts/default.vue'

useHead({
  title: 'Kontak Saya'
});
</script>

<template lang="pug">
layout#contact-me
  template(#page-title) Kontak Saya
  template(#page-desc) Biar semakin dekat dan semakin akrab, biar enak buat ngobrolnya. Tapi ada batasannya lho!

  section.pb-16.pt-6.gap-2.text-slate-500(class="dark:text-slate-400")
    div(class="container lg:text-left mx-auto px-4 lg:max-w-7xl justify-between flex flex-col-reverse lg:flex-row gap-6 lg:gap-12")
      div.w-full(class="lg:w-3/4")
        div(class="lg:pl-20 border-l border-transparent lg:border-slate-200 dark:lg:border-slate-800") 
          p.pb-6 Mohon maaf sebelumnya, sedikit mengingatkan kalau semua informasi yang saya cantumkan disini hanya untuk keperluan bisnis saja. Kalau ada pertanyaan gausah malu buat chat di sosial media saya, tapi dengan catatan harus memperkenalkan diri dulu biar gak aku anggap&nbsp;
            em spammer
            | .
          p Saya sangat mengapresiasi itu apabila anda menggunakan informasi saya dengan bijak dan bertanggungjawab.

          hr.border-slate-200.pb-12.mt-12(class="dark:border-slate-700")

          h3.font-bold.mb-5.text-3xl.relative.group.-mt-20.pt-20.flex.items-center.gap-4(class="hover:lg:-ml-12", id="kontak-saya")
            a(class="hidden group-hover:lg:flex font-normal rounded w-8 h-8 bg-slate-100 border border-slate-200 justify-center dark:bg-gray-900 dark:border-gray-800 items-center", href="#kontak-saya") #
            span Kontak

          .relative.overflow-x-auto.overflow-hidden.rounded-lg.border(class="dark:border-gray-800")
            table.w-full.text-sm.text-left.text-gray-500(class='dark:text-gray-400')
              thead.border-b.text-xs.text-gray-700.uppercase.bg-gray-50(class='dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400')
                tr
                  th.px-4.py-3(class="w-1/5", scope='col')
                    | Contact
                  th.px-4.py-3(class="w-4/5", scope='col')
                    | Detail
              tbody
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Surat Elektronik
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="mailto:me@cakadi.my.id")
                      span me@cakadi.my.id
                      i.fas.fa-external-link.text-sm
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Whatsapp
                  td.px-4.py-4
                    | 08133355**** 
                    span.text-sky-500 
                      i.fas.fa-info-circle.text-sm.ml-2.mr-1
                      | Mohon surati saya dulu
                tr.bg-white(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Alamat
                  td.px-4.py-4
                    ol.list-decimal.list-inside(role="list")
                      li Kota Madiun 63131, Jawa Timur, Indonesia
                      li Kabupaten Ngawi 63281, Jawa Timur, Indonesia.

          p.mt-4 Kalau anda mau informasi pribadi saya yang lain, seperti nomor hp, data diri saya, monggo bisa kirim surat dulu ke surel saya.

          hr.border-slate-200.pb-12.mt-12(class="dark:border-slate-700")

          h3.font-bold.text-3xl.mb-5.relative.group.-mt-20.pt-20.flex.items-center.gap-4(class="hover:lg:-ml-12", id="medsos-saya")
            a(class="hidden group-hover:lg:flex font-normal rounded w-8 h-8 bg-slate-100 border border-slate-200 justify-center dark:bg-gray-900 dark:border-gray-800 items-center", href="#medsos-saya") #
            span Media Sosial

          p.mb-3 Kamu bisa mencariku di hampir semua platform media sosial dengan mengetikkan nama penggunaku yakni 
            strong @cakadi190 
            | atau 
            strong &OpenCurlyDoubleQuote;Amir Zuhdi Wibowo&CloseCurlyDoubleQuote;
            | . Dan kemudian kamu bisa menambahkan pertemanan kepadaku.
          p.pb-5 Tapi kalau kamu hanya punya sedikit waktu, aku cantumkan daftar media sosialku ke halaman ini.

          .relative.overflow-x-auto.overflow-hidden.rounded-lg.border(class="dark:border-gray-800")
            table.w-full.text-sm.text-left.text-gray-500(class='dark:text-gray-400')
              thead.border-b.text-xs.text-gray-700.uppercase.bg-gray-50(class='dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400')
                tr
                  th.px-4.py-3(class="w-1/5", scope='col')
                    | Platform
                  th.px-4.py-3(class="w-4/5", scope='col')
                    | Link
              tbody
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Instagram
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://www.instagram.com/cakadi190")
                      span @cakadi190
                      i.fas.fa-external-link.text-sm
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Twitter
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://www.twitter.com/cakadi190")
                      span @cakadi190
                      i.fas.fa-external-link.text-sm
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Facebook
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://www.facebook.com/cakadi190")
                      span @cakadi190
                      i.fas.fa-external-link.text-sm
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | TikTok
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://www.tiktok.com/@catatancakadi")
                      span @catatancakadi
                      i.fas.fa-external-link.text-sm
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Github
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://www.github.com/cakadi190")
                      span @cakadi190
                      i.fas.fa-external-link.text-sm
                tr.bg-white.border-b(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | StackOverflow
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://stackoverflow.com/users/17911271/amir-zuhdi-wibowo")
                      span Amir Zuhdi Wibowo
                      i.fas.fa-external-link.text-sm
                tr.bg-white(class='dark:bg-transparent dark:border-gray-800')
                  th.px-4.py-4.font-medium.text-gray-900.whitespace-nowrap(scope='row', class='dark:text-white')
                    | Alamat
                  td.px-4.py-4
                    a.underline.flex.gap-2.max-w-max(href="https://www.linkedin.com/in/cakadi190")
                      span https://www.linkedin.com/in/cakadi190
                      i.fas.fa-external-link.text-sm

      div.w-full(class="lg:w-1/4 lg:-mt-16") 
        .bg-white.top-0.border.border-gray-200(class="lg:sticky lg:top-16 dark:border-gray-800 dark:bg-gray-900 rounded-lg")
          h6.font-bold.px-5.py-4.border-b.border-gray-200(class="dark:border-gray-800") Tabel Konten
          div.my-2
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#kontak-saya") Kontak
            a.py-2.px-5.block.duration-200.transition-all(class="hover:bg-green-500/[.125] hover:text-green-600", href="#medsos-saya") Medsos Saya
</template>