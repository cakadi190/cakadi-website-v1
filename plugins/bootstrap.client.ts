import * as bootstrap from 'bootstrap';
import $ from 'jquery';

export default defineNuxtPlugin(({ vueApp, hook }) => {
  hook('app:beforeMount', () => {
    window.jQuery = window.$ = $;
    window.bootstrap = bootstrap;
  });

  vueApp.provide('bootstrap', bootstrap);
});