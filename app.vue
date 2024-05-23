<template>
	<nuxt-loading-indicator />

	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>

<style lang="scss">
.need-space {
  min-height: 7.5rem;
  padding: 7rem 0;
}
</style>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk: any) => {
    return titleChunk ? `Cak Adi • ${titleChunk}` : 'Cak Adi';
  },
  meta: [
    { name: 'og:image', key: 'og:image', content: '/images/va-ogImg.png' },
  ]
});

const colorMode = useColorMode();
const theme = ref('light');

const applyTheme = (themes: string) => {
  document.documentElement.setAttribute('data-bs-theme', themes);
  theme.value = themes;
};

const handleSystemThemeChange = (e: MediaQueryListEvent) => {
  applyTheme(e.matches ? 'dark' : 'light');
};

onMounted(() => {
  if (colorMode.preference === 'system') {
    const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(systemThemeQuery.matches ? 'dark' : 'light');
    systemThemeQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener('change', handleSystemThemeChange);
    };
  } else {
    applyTheme(colorMode.preference);
  }
});

const initTooltipAndPopover = () => {
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new window.bootstrap.Tooltip(tooltipTriggerEl);
	});

	var popoverTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="popover"]')
	);
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new window.bootstrap.Popover(popoverTriggerEl);
	});
};

onMounted(initTooltipAndPopover);
onUpdated(initTooltipAndPopover);

const route = useRoute();

watch(
  () => route.fullPath, 
  () => {
    initTooltipAndPopover();
  }
);
</script>