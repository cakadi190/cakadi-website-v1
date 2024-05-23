<template>
	<teleport to="body">
		<div
			class="offcanvas offcanvas-start"
			tabindex="-1"
			id="offcanvas"
			aria-labelledby="offcanvasLabel"
		>
			<div class="offcanvas-header">
				<nuxt-link to="/" class="offcanvas-title">
					<img
						class="site-logo"
						src="/images/brands/logo-color-long.svg"
						height="28"
						alt="Logo Cak Adi"
					/>
				</nuxt-link>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav gap-2 justify-content-end flex-grow-1">
					<li class="nav-item" v-for="(item, index) in navbarMenu" :key="index">
						<nuxt-link
							:class="item.link === $route.path ? 'active' : ''"
							class="nav-link"
							:to="item.link"
							>{{ item.name }}</nuxt-link
						>
					</li>
				</ul>
			</div>
		</div>
	</teleport>

	<nav class="navbar navbar-expand-lg fixed-top navbar-light py-3">
		<div class="container">
			<nuxt-link to="/" class="navbar-brand">
				<img
					class="site-logo"
					src="/images/brands/logo-color-long.svg"
					height="32"
					alt="Logo Cak Adi"
				/>
			</nuxt-link>
			<button
				class="navbar-toggler p-0 border-0"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvas"
				aria-controls="offcanvas"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarMain">
				<ul class="navbar-nav gap-2 justify-content-end flex-grow-1">
					<li class="nav-item" v-for="(item, index) in navbarMenu" :key="index">
						<nuxt-link
							:class="item.link === $route.path ? 'active' : ''"
							class="nav-link"
							:to="item.link"
							>{{ item.name }}</nuxt-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
const navbar = ref<HTMLElement | null>(null);

const colorMode = useColorMode();
const theme = ref("light");

const navbarMenu = ref([
	{ name: "Beranda", link: "/" },
	{ name: "Portofolio", link: "/portofolio" },
	{ name: "Tentang Saya", link: "/tentang-saya" },
	{ name: "Pendidikan & Organisasi", link: "/pendidikan" },
	{ name: "Penghargaan", link: "/penghargaan" },
	{ name: "Karir", link: "/karir" },
	// { name: "Kontak Saya", link: "/kontak" },
]);

const applyTheme = (themes: string) => {
	const logos = document.getElementsByClassName("site-logo");

	Array.from(logos).forEach((logoElement: Element) => {
		if (logoElement) {
			logoElement.setAttribute(
				"src",
				`/images/brands/logo-${themes === "light" ? "color" : "white"}-long.svg`
			);
		}
	});

	theme.value = themes;
};

const handleSystemThemeChange = (e: MediaQueryListEvent) => {
	applyTheme(e.matches ? "dark" : "light");
};

onMounted(() => {
	if (colorMode.preference === "system") {
		const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
		applyTheme(systemThemeQuery.matches ? "dark" : "light");
		systemThemeQuery.addEventListener("change", handleSystemThemeChange);

		return () => {
			systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
		};
	} else {
		applyTheme(colorMode.preference);
	}
});

const handleScroll = () => {
	if (window.scrollY >= 50) {
		navbar.value?.classList.add(
			theme.value === "dark" ? "bg-dark" : "bg-white"
		);
		navbar.value?.classList.add("border-bottom");
		navbar.value?.style.setProperty("--bs-bg-opacity", "0.75");
		navbar.value?.style.setProperty("backdrop-filter", "blur(1rem)");
	} else {
		navbar.value?.classList.remove(
			theme.value === "dark" ? "bg-dark" : "bg-white"
		);
		navbar.value?.classList.remove("border-bottom");
		navbar.value?.style.removeProperty("--bs-bg-opacity");
		navbar.value?.style.removeProperty("backdrop-filter");
	}
};

onMounted(() => {
	navbar.value = document.querySelector(".navbar");
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<script lang="ts">
export default defineComponent({
	name: "NavbarMain",
});
</script>

<style>
</style>