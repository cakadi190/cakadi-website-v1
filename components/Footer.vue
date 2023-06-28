<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template lang="pug">
//- Footer
footer.footer-main.text-gray-300.bg-gray-900.border-t.border-transparent(class="dark:bg-gray-900/[.25] py-6 dark:border-gray-800")
  //- Footer Top
  div.container.mx-auto.px-4.py-6.flex-col.gap-6(class="lg:flex-row dark:text-gray-400 md:max-w-7xl flex justify-between")
    //- .col-md-6
    .w-full(class="lg:w-1/2 lg:mb-0")
      h3.font-bold.mb-2 Tentang Saya 
      p Saya adalah seorang fullstack developer yang suka sekali dengan desain dan juga tertarik di dunia teknologi. Saya adalah orang kelahiran Klaten, Jawa Tengah dan berdomisili di Ngawi, Jawa Timur.

      .flex.gap-3.mt-4
        a(aria-label="Cak Adi's Facebook", class="hover:text-white duration-200 transition-all", href="https://www.facebook.com/cakadi190")
          i.fab.fa-facebook.fa-fw.text-xl
        a(aria-label="Cak Adi's Twitter", class="hover:text-white duration-200 transition-all", href="https://www.twitter.com/cakadi190")
          i.fab.fa-twitter.fa-fw.text-xl
        a(aria-label="Cak Adi's Figma", class="hover:text-white duration-200 transition-all", href="https://www.figma.com/@cakadi190")
          i.fab.fa-figma.fa-fw.text-xl
        a(aria-label="Cak Adi's Instagram", class="hover:text-white duration-200 transition-all", href="https://www.instagram.com/cakadi190")
          i.fab.fa-instagram.fa-fw.text-xl
        a(aria-label="Cak Adi's Linkedin", class="hover:text-white duration-200 transition-all", href="https://www.linkedin.com/in/cakadi190")
          i.fab.fa-linkedin.fa-fw.text-xl

    //- .col-md-6.row
    .w-full.grid.justify-between.gap-6.grid-flow-cols-dense(class="lg:w-1/2 lg:gap-0 grid-cols-2 sm:grid-cols-3")
      //- .col-md-3.col-6
      div.w-full
        h3.font-bold.mb-3 Ke(-rjaan/gabut)-an Saya 

        ul.flex.flex-col.gap-2
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", :to="{ name: 'pendidikan' }") Pendidikan
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", :to="{ name: 'penghargaan' }") Penghargaan
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", :to="{ name: 'skill-dan-perkakas' }") Skill &amp; Perkakas
          li
            router-link.text-white.transition-all.duration-200.flex.gap-2.items-center(class="cursor-not-allowed pointer-events-none", :to="{ name: 'penghargaan' }")
              span.text-gray-400 Layanan
              span.py-1.px-3.rounded-full.border.border-gray-300.text-xs Soon
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", :to="{ name: 'portofolio' }") Portofolio Saya
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", :to="{ name: 'karir' }") Karir

      //- .col-md-3.col-6
      div.w-full
        h3.font-bold.mb-3 Sumber Daya

        ul.flex.flex-col.gap-2
          li
            a.text-white.transition-all.duration-200(class="hover:text-gray-300", href="https://www.cakadi.my.id") Blog Pribadi
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", to="/sumber-daya/tempat-belajar-ngoding") Referensi Ngoding
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", to="/sumber-daya/tempat-ngopi") Tempat Ngopi

      //- .col-md-3
      div.w-full(class="col-span-2 sm:col-auto")
        h3.font-bold.mb-3 Tautan Lain-lain

        ul.flex.flex-col.gap-2
          li
            router-link.text-white.transition-all.duration-200(class="hover:text-gray-300", :to="{ name: 'kredit' }") Kredit
          li
            a.text-white.transition-all.duration-200(class="hover:text-gray-300", href="https://trakteer.id/cakadi190") Donasi Di trakteer.id
          li
            a.text-white.transition-all.duration-200(class="hover:text-gray-300", href="https://ko-fi.com/cakadi190") Donasi Di ko-fi.com

  //- Footer Bottom
  .container.mx-auto.px-4.text-center.pt-8.border-t.border-gray-800.flex-col(class="lg:text-left lg:flex-row dark:text-gray-400 lg:max-w-7xl flex justify-between py-6")
    p Hak cipta &copy; {{ year ?? 2023 }} 
      a.text-white.duration-200.transition-all(class="hover:text-green-400", href="https://www.cakadi.my.id") Cak Adi
      | . Hak cipta dilindungi perundang-undangan.
    p Made with 
      i.fas.fa-heart.text-pink-500
      |  by 
      a.text-white.duration-200.transition-all(class="hover:text-green-400", href="https://www.dasakreativa.web.id") Dasa Kreativa Studio
      | .
</template>