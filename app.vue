<template>
	<nuxt-loading-indicator />

	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>

<script lang="ts" setup>
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
onUpdated(initTooltipAndPopover)
</script>