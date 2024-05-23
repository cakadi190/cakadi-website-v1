const jqueryBootstrap = [
  "devicon:jquery",
  "devicon:bootstrap",
];

const kotlinJava = [
  "devicon:kotlin",
  "devicon:java",
];

const flutterDart = [
  "devicon:flutter",
  "devicon:dart",
];

const htmlCssJS = [
  "devicon:html5",
  "devicon:css3",
  "devicon:javascript",
];

const vuejs = [
  "devicon:vuejs",
  "devicon:typescript",
  "devicon:javascript",
];

const nuxt = [
  "devicon:nuxtjs",
  ...vuejs
];

const tailwind = [
  "devicon:tailwindcss",
  ...htmlCssJS
];

const php = [
  "devicon:php",
];

const laravel = [
  "devicon:laravel",
  ...php
];

const laravelFullstackNonSPABootstrap = [
  ...laravel,
  ...htmlCssJS,
  ...jqueryBootstrap,
];

const laravelFullstackNonSPATailwind = [
  ...laravel,
  ...htmlCssJS,
  ...tailwind
];

export {
  jqueryBootstrap,
  htmlCssJS,
  vuejs,
  nuxt,
  tailwind,
  php,
  laravel,
  laravelFullstackNonSPABootstrap,
  laravelFullstackNonSPATailwind,
  flutterDart,
  kotlinJava
};