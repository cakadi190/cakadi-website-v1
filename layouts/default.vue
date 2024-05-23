<template>
  <div id="base-layout">
    <navbar-main />

    <slot />

    <footer-main />
  </div>
</template>

<script lang="ts" setup>
import navbarMain from './partial/navbar.vue';
import footerMain from './partial/footer.vue';
</script>

<style>
</style>