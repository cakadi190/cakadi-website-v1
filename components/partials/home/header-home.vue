<script lang="ts" setup>
import {
	initialSlideFromLeftToRight,
	enterSlideFromLeftToRight,
	initialSlideFromRightToLeft,
	enterSlideFromRightToLeft,
} from "../../motion";

useHead({
	title: "Beranda",
	meta: [
		{
			key: "description",
			name: "description",
			content:
				"Web Resmi Amir Zuhdi Wibowo yang mana adalah seorang Fullstack Web Developer yang suka desain dan atau semua hal yang berbau teknologi.",
		},
		{
			key: "og:canonical",
			name: "canonical",
			content: "https://www.cakadi.id",
		},

		{ key: "og:url", name: "og:url", content: "https://www.cakadi.id" },
		{
			key: "og:description",
			name: "og:description",
			content:
				"Web Resmi Amir Zuhdi Wibowo yang mana adalah seorang Fullstack Web Developer yang suka desain dan atau semua hal yang berbau teknologi.",
		},
	],
});

const techStack = ref([
	{ icon: "devicon:laravel", name: "Laravel" },
	{ icon: "devicon:vuejs", name: "VueJS" },
	{ icon: "devicon:bootstrap", name: "Bootstrap" },
	{ icon: "devicon:nuxtjs", name: "NuxtJS" },
	{ icon: "devicon:docker", name: "Docker" },
	{ icon: "devicon-plain:wordpress", name: "WordPress" },
	{ type: "separator" },
	{ icon: "devicon:vscode", name: "Visual Studio Code" },
	{ icon: "devicon:figma", name: "Figma" },
	{ icon: "devicon:ubuntu", name: "Linux Ubuntu" },
]);
</script>

<script lang="ts">
export default defineComponent({
	name: "HeaderHome",
});
</script>

<template>
	<header id="masthead">
		<div class="container">
			<div class="row gy-4">
				<div class="col-md-7 text-center text-lg-start">
					<h2
						class="h4"
						v-motion
						:initial="initialSlideFromLeftToRight"
						:enter="enterSlideFromLeftToRight"
					>
						Halo rek! 👋 Perkenalkan, Namaku...
					</h2>
					<h1
						class="main-title justify-content-center justify-content-lg-start"
						v-motion
						:initial="initialSlideFromLeftToRight"
						:enter="enterSlideFromLeftToRight"
					>
						<span class="text-primary text-decoration-underline">A</span
						>mir&nbsp;Zuh<span class="text-primary text-decoration-underline"
							>di</span
						>&nbsp;Wibowo
					</h1>
					<p
						v-motion
						:initial="initialSlideFromLeftToRight"
						:enter="enterSlideFromLeftToRight"
						class="mb-4 main-desc"
					>
						Seorang <strong>Fullstack Web Developer</strong> yang berbasis di
						Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang
						berbau <strong>teknologi</strong>.
					</p>

					<div
						class="d-flex pb-2 gap-2 justify-content-center justify-content-lg-start align-items-center"
					>
						<NuxtLink
							to="/contact-me"
							class="btn btn-primary d-flex align-items-center gap-2"
							v-motion
							:initial="initialSlideFromLeftToRight"
							:enter="enterSlideFromLeftToRight"
						>
							<Icon name="fa6-solid:phone" />
							<span>Hubungi Saya</span>
						</NuxtLink>

						<NuxtLink
							to="/download-cv"
							class="btn btn-outline-primary d-flex align-items-center gap-2"
							v-motion
							:initial="initialSlideFromLeftToRight"
							:enter="enterSlideFromLeftToRight"
						>
							<Icon name="fa6-solid:file-pdf" />
							<span>Resume</span>
						</NuxtLink>
					</div>

					<div
						class="d-flex pt-4 flex-column gap-2"
						v-motion
						:initial="initialSlideFromLeftToRight"
						:enter="enterSlideFromLeftToRight"
					>
						<h5 class="text-center text-lg-start">
							<em>Tech Stack</em> Andalan Saya
						</h5>

						<div
							class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3"
						>
							<span
								class="tech-stack"
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								v-bind="item.name ? { 'data-bs-title': item.name } : {}"
								v-for="(item, index) in techStack"
								:key="index"
							>
								<div class="vr h-100" v-if="item.type === 'separator'"></div>
								<Icon v-else :name="item.icon" size="32" />
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<nuxt-img
						v-motion
						:initial="initialSlideFromRightToLeft"
						:enter="enterSlideFromRightToLeft"
						src="/images/fotoku.min.png"
						alt="Cak Adi"
						class="w-100"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
#masthead {
	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -2;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 0.8)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");

		[data-bs-theme="dark"] & {
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / .1)' stroke-dasharray='5 3' transform='scale(1%2c -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
		}
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: linear-gradient(to top, white, rgba(255, 255, 255, 0.5));

		[data-bs-theme="dark"] & {
			background: linear-gradient(
				to top,
				rgb(var(--bs-body-bg-rgb)),
				rgba(var(--bs-body-bg-rgb), 0.125)
			);
		}
	}

	.row {
		min-height: 100dvh;
		align-items: center;
		justify-content: center;
		padding-top: 7.5rem;
		padding-bottom: 7.5rem;
	}

	.main-title {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		font-size: 4rem;
		font-weight: 600;

		@media screen and (max-width: 1600px) {
			font-size: 3rem;
		}

		@media screen and (max-width: 1200px) {
			font-size: 2.5rem;
		}

		@media screen and (max-width: 768px) {
			font-size: 2rem;
		}
	}

	.main-desc {
		font-size: 1.5rem;
		opacity: 0.65 !important;

		@media screen and (max-width: 1600px) {
			font-size: 1.25rem;
		}

		@media screen and (max-width: 1200px) {
			font-size: 1.25rem;
		}

		@media screen and (max-width: 768px) {
			font-size: 1rem;
		}
	}

	.tech-stack {
		filter: grayscale(100%);
		transition: all 0.2s;
		cursor: pointer;

		&:hover {
			filter: grayscale(0);
		}
	}
}
</style>