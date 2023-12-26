<script lang="ts" setup>
import ImageLogo from '@/assets/images/brands/logo-color.svg';

interface LogoInterface {
  height?: number | string;
  width?: number | string;
};

const props = withDefaults(
  defineProps<LogoInterface>(), 
  {
    height: 32,
    width: 'auto',
  }
);
</script>

<template>
  <ImageLogo :fontControlled="false" :width="props.width" :height="props.height" />
</template>