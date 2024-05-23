<template>
	<div id="career-page">
		<header-page>
			<template #title>Karir</template>
			<template #subtitle
				>Biar gak dikira pengangguran sama orang lain.</template
			>
		</header-page>

		<section class="need-space pt-0">
			<div class="container">
				<ul class="list-group list-group-flush">
					<li
						class="list-group-item py-4"
						v-for="exp in careerExp"
						:key="exp.company"
					>
						<div class="d-flex gap-4">
							<div class="text-center align-items-start align-items-lg-center">
								<Icon name="fa6-solid:briefcase" size="48" />
							</div>
							<div class="content">
								<h5 class="mb-1">{{ exp.position }}</h5>
								<small class="text-muted"
									>{{ exp.company }} | {{ exp.location }}</small
								>
								<p class="mb-0">
									{{ exp.startDate }} - {{ exp.endDate || "Sekarang" }}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
const careerExp = ref([
	{
		position: "Magang Fullstack Web Developer",
		company: "PT Humma Teknologi Indonesia",
		location: "Karangploso, Kab. Malang, Jawa Timur",
		startDate: "Februari 2023",
		endDate: "Sekarang", // atau gunakan null jika masih bekerja di sana
	},
	{
		position: "Chief Technology Officer & Co-Founder",
		company: "PT Buat Usaha Digital Indonesia",
		location: "Slawi, Kab. Tegal, Jawa Tengah",
		startDate: "Juli 2023",
		endDate: "Desember 2023", // atau gunakan null jika masih bekerja di sana
	},
	{
		position: "Junior Fullstack Web Developer",
		company: "Asean Fintech Group Ltd.",
		location: "Semarang Tengah, Kota Semarang, Jawa Tengah",
		startDate: "Nov 2021",
		endDate: "Februari 2022",
	},
	{
		position: "Pemilik Bisnis",
		company:
			"Ahsana Digital Intermedia (Dulu Dikenal Sebagai Dasa Kreativa Studio)",
		location: "Taman, Kota Madiun, Jawa Timur",
		startDate: "Februari 2021",
		endDate: "Sekarang", // atau gunakan null jika masih menjadi pemilik
	},
	{
		position: "Frontend Web Developer",
		company: "CV Dokternet Indonesia",
		location: "Waru, Sidoarjo, Jawa Timur",
		startDate: "Oktober 2021",
		endDate: "November 2021",
	},
	{
		position: "Desainer Grafis",
		company: "Artografi Indonesia",
		location: "Bayemtaman, Magetan, Jawa Timur",
		startDate: "November 2020",
		endDate: "Januari 2021",
	},
]);
</script>

<style>
</style>