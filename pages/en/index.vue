<template lang="pug">
.min-h-screen.flex.items-center.justify-center(class="dark:bg-gray-950")
  div(class="container lg:text-left justify-center flex mx-auto px-4 lg:max-w-7xl items-center gap-2")
    div.text-center(class="w-full lg:w-1/2")
      router-link.mx-auto.flex.justify-center.mb-4(v-motion, :initial="{ opacity: 0, y: -100 }", :enter="{ opacity: 1, y: 0 }", :to="{ name: 'index' }")
        img(class="dark:hidden", src="/images/brands/logo-color-long.svg", style="height: 36px")
        img(class="hidden dark:block", src="/images/brands/logo-white-long.svg", style="height: 36px")

      h1.font-bold.text-4xl.mb-2(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="lg:text-6xl dark:text-white") Coming Soon!
      p.text-gray-500(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="lg:text-2xl dark:text-gray-400") I'll prepare this page on the next update when I need CV with English International language.
      p.mt-4.text-gray-400(v-motion, :initial="{ opacity: 0, x: -100 }", :enter="{ opacity: 1, x: 0 }", :delay="50", class="dark:text-gray-500") ~ Regards, Cak Adi ~
</template>