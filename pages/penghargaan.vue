<template>
	<div id="achievements-page">
		<header-page>
			<template #title>Penghargaan Saya</template>
			<template #subtitle
				>Biar gak dikira gak punya pencapaian apa-apa</template
			>
		</header-page>

		<section class="need-space pt-0">
			<div class="container">
				<ul class="list-group list-group-flush">
					<li
						class="list-group-item py-4"
						v-for="award in awardsAndCertifications"
						:key="award.event"
						v-motion
						:enter="enterSlideFromBottomToTop"
						:initial="initialSlideFromBottomToTop"
					>
						<div class="d-flex gap-3 align-items-start align-items-lg-center">
							<div class="text-center align-items-start align-items-lg-center">
								<Icon
									:style="{
										color: award.rank
											? rankColor[award.rank - 1]
											: 'var(--bs-body-color)',
									}"
									:name="award.icon"
									size="48"
								/>
							</div>
							<div class="content">
								<h5 class="mb-1">{{ award.event }}</h5>
								<p class="mb-1">{{ award.award }}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import {
	initialSlideFromBottomToTop,
	enterSlideFromBottomToTop,
} from "~/components/motion";

useHead({
	title: "Penghargaan dan Sertifikasi",
});

const rankColor = ref(["#FFD700", "#C0C0C0", "#CD7F32"]);

const awardsAndCertifications = ref([
	{
		event: "Fostifest - Universitas Muhammadiyah Surakarta",
		award: "Web Design Competition - 3rd Place (National)",
		icon: "fa6-solid:trophy",
		rank: 3,
	},
	{
		event: "BSDMP Kominfo Surabaya",
		award: "Junior Web Developer Certification - Graduated (National)",
		icon: "mdi:certificate",
	},
	{
		event: "IntechFest - Politeknik Negeri Bali",
		award: "Web Design Competition - 1st Place (National)",
		icon: "fa6-solid:trophy",
		rank: 1,
	},
	{
		event: "Deptics - Universitas PGRI Madiun",
		award: "Web Design Competition - 1st Place (National)",
		icon: "fa6-solid:trophy",
		rank: 1,
	},
	{
		event: "ByTesFest - Universitas Sebelas Maret",
		award: "Web Design Competition - 1st Place (National)",
		icon: "fa6-solid:trophy",
		rank: 1,
	},
	{
		event: "LDP 2020 - OSIS SMA Negeri 1 Ponorogo",
		award: "Lomba Desain Poster 2020 - 3rd Place (East Java Regional)",
		icon: "fa6-solid:trophy",
		rank: 3,
	},
]);
</script>

<style>
</style>