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

  section.flex.gap-2.flex-col(class="lg:flex-row")
    div Test
    div Test
</template>