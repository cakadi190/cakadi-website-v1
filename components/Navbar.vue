<script setup lang="ts">
import { onMounted, ref } from 'vue';

const menuLinks: MenuLink[] = [
  { label: 'Beranda', link: 'index', icon: 'fas fa-home' },
  { label: 'Portofolio', link: 'portofolio', icon: 'fas fa-wrench' },
  { label: 'Pendidikan', link: 'pendidikan', icon: 'fas fa-graduation-cap' },
  { label: 'Penghargaan', link: 'penghargaan', icon: 'fas fa-trophy' },
  { label: 'Karir', link: 'karir', icon: 'fas fa-briefcase' },
  { label: 'Kontak Saya', link: 'kontak-saya', icon: 'fas fa-envelope' },
];

const refNavbar = ref<HTMLElement | null>(null);
const refSidebar = ref<HTMLElement | null>(null);
const refShadow = ref<HTMLElement | null>(null);

const scrollClass: string[] = [
  'bg-white/[.75]',
  'border-gray-200',
  'backdrop-blur-md',
  'dark:border-gray-700',
  'dark:bg-gray-950/[.75]',
];
const staticClass: string[] = [
  'bg-transparent',
  'bg-transparent',
  'border-transparent',
  'dark:border-gray-900',
];

const readyOnScroll = () => {
  scrollClass.forEach((a) => {
    refNavbar.value?.classList.add(a);
  });
  staticClass.forEach((a) => {
    refNavbar.value?.classList.remove(a);
  });
};
const readyOnStatic = () => {
  staticClass.forEach((a) => {
    refNavbar.value?.classList.add(a);
  });
  scrollClass.forEach((a) => {
    refNavbar.value?.classList.remove(a);
  });
};

onMounted(() => {
  readyOnStatic();

  window.addEventListener('resize', () => {
    if(window.innerWidth > 768 && !refSidebar.value?.classList.contains('ml-[-100%]')) refSidebar.value?.classList.add('ml-[-100%]'); refShadow.value?.classList.add('ml-[-100%]')
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      readyOnScroll();
    } else {
      readyOnStatic();
    }
  });
});

const sidebarToggler = () => {
  refSidebar.value?.classList.toggle('ml-[-100%]')
  refShadow.value?.classList.toggle('ml-[-100%]')
}
</script>

<template lang="pug">
div
  nav(id="navbar", ref="refNavbar", class="fixed w-full duration-200 border-transparent top-0 z-40 border-b dark:border-gray-900 py-2")
    div(class="container mx-auto px-4 lg:max-w-7xl flex items-center justify-between")
      a(class="outline-0 outline-none transition-all duration-200 lg:hidden items-center flex", href="javascript:void(0)", @click="sidebarToggler")
        i.fas.fa-bars.text-xl
      router-link.ml-6.mr-auto.text-xl.flex.justify-center.items-center.outline-none.outline-0(:to="{ name: 'index' }", class="lg:ml-0 outline-0 outline-none transition-all duration-200 min-hover:text-green-500")
        img(class="dark:hidden", src="/images/brands/logo-color-long.svg", style="height: 24px")
        img(class="hidden dark:block", src="/images/brands/logo-white-long.svg", style="height: 24px")

      .ml-auto.hidden.mr-2(class="lg:flex lg:items-center lg:gap-2")
        router-link.flex.gap-2.items-center.px-2.border-b-2.border-transparent.py-1.duration-200.transition-all(class="hover:text-green-600 hover:border-green-600", v-for="(menu, index) in menuLinks", :key="index", :to="{ name: menu.link }", :class="{ 'text-gray-500 dark:text-gray-400': $route.name !== menu.link, 'text-green-500': $route.name === menu.link }")
          span {{ menu.label }}

      .group.relative
        a(href="javascript:void(0)", class="z-20 flex items-center w-10 h-10 rounded-full justify-center bg-slate-200 dark:bg-slate-300/[.25]")
          img.rounded-full(style="height: 24px", src="/images/flags/id-sq.svg")
      
        ul.absolute.z-10.hidden.h-0.rounded-md.border.border-gray-200.bg-white.p-2.text-gray-700.transition-all.duration-200.right-0(class='min-w-[220px] group-hover:block group-hover:h-max dark:border-gray-800 dark:bg-gray-900')
          li
            h6.px-2.mb-3.text-gray-400(class="dark:text-gray-500") Bahasa : Indonesia
          li
            router-link.flex.w-full.items-center.rounded-md.p-3.outline-none.outline-0.transition-all.duration-200(class='bg-green-500 text-white hover:text-gray-700 hover:bg-gray-900/[.075] focus:bg-green-500 hover:dark:text-white focus:text-white active:bg-green-500 active:text-white dark:text-gray-white dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', to='./')
              img(style="height: 20px", src="/images/flags/id.svg")
              span Indonesia
          li
            router-link.flex.w-full.items-center.rounded-md.p-3.outline-none.outline-0.transition-all.duration-200(class='hover:bg-gray-900/[.075] focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', to='./en')
              img(style="height: 20px", src="/images/flags/us.svg")
              span English (USA)

      .group.relative.ml-2
        a(href="javascript:void(0)", class="z-20 h-10 w-10 flex items-center px-3 py-1")
          i.fas.fa-ellipsis-v.fa-fw
      
        ul.absolute.z-10.hidden.h-0.rounded-md.border.border-gray-200.bg-white.p-2.text-gray-700.transition-all.duration-200.right-0(class='min-w-[220px] group-hover:block group-hover:h-max dark:border-gray-800 dark:bg-gray-900')
          li
            h6.px-4.mb-2.text-gray-400.pt-2(class="dark:text-gray-500") Ikuti Media Sosial Saya
          li
            a.flex.w-full.items-center.rounded-md.p-2.px-4.outline-none.outline-0.transition-all.duration-200(class='hover:bg-gray-900/[.075] focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', href='https://www.facebook.com/cakadi190')
              i.fab.fa-facebook
              span Facebook
          li
            a.flex.w-full.items-center.rounded-md.p-2.px-4.outline-none.outline-0.transition-all.duration-200(class='hover:bg-gray-900/[.075] focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', href='https://www.twitter.com/cakadi190')
              i.fab.fa-twitter
              span Twitter
          li
            a.flex.w-full.items-center.rounded-md.p-2.px-4.outline-none.outline-0.transition-all.duration-200(class='hover:bg-gray-900/[.075] focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', href='https://www.instagram.com/cakadi190')
              i.fab.fa-instagram
              span Instagram
          li
            a.flex.w-full.items-center.rounded-md.p-2.px-4.outline-none.outline-0.transition-all.duration-200(class='hover:bg-gray-900/[.075] focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', href='https://www.linkedin.com/in/cakadi190')
              i.fab.fa-linkedin
              span LinkedIn
          li
            a.flex.w-full.items-center.rounded-md.p-2.px-4.outline-none.outline-0.transition-all.duration-200(class='hover:bg-gray-900/[.075] focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-green-500 dark:focus:text-white dark:active:bg-green-500 gap-2 flex dark:active:text-white', href='https://www.youtube.com/@cakadi190')
              i.fab.fa-youtube
              span Youtube

  div.w-full.h-full.fixed.z-40.duration-200.transition-all(ref="refShadow", class="bg-slate-950/[.75] ml-[-100%]", @click="sidebarToggler")
  aside.fixed.top-0.left-0.h-screen.bg-white.border-r.border-transparent.z-50.flex.duration-200.transition-all.flex-col.rounded-r-xl(class="w-[20rem] dark:border-slate-700 dark:bg-slate-900 ml-[-100%]", ref="refSidebar")
    .px-6.pt-5.pb-7.flex.justify-between
      router-link.max-w-max.text-xl.flex.items-center.outline-none.outline-0(:to="{ name: 'index' }", class="outline-0 outline-none transition-all duration-200 min-hover:text-green-500")
        img(class="dark:hidden", src="/images/brands/logo-color-long.svg", style="height: 24px")
        img(class="hidden dark:block", src="/images/brands/logo-white-long.svg", style="height: 24px")

      button.h-8.w-8.flex.items-center.justify-center(@click="sidebarToggler")
        i.fas.fa-close.text-2xl

    div.px-4.mr-2.flex.flex-col.gap-1.grow.transition-all.duration-200
      router-link.flex.gap-3.items-center.px-4.rounded-lg.border-b-2.border-transparent.py-2.duration-200.transition-all(v-for="(menu, index) in menuLinks", :key="index", :to="{ name: menu.link }", class="text-gray-500 dark:text-gray-400", :class="{ 'dark:text-green-500 bg-green-500/[.25] text-green-800': $route.name === menu.link }")
        i(:class="menu.icon")
        span {{ menu.label }}
</template>