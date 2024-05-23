<template>
	<div id="education">
		<header-page>
			<template #title>Riwayat Pendidikan dan Organisasi</template>
			<template #subtitle
				>Biar gak bingung saya ini alumni mana aja dan atau lagi sekolah
				dimana?</template
			>
		</header-page>

		<section class="need-space pt-0">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<!-- Tab panes -->
						<div class="tab-content" id="myTabContent">
							<div
								class="tab-pane fade show active"
								id="education-tab-pane"
								role="tabpanel"
								aria-labelledby="education-tab"
							>
								<div class="pb-4 mb-4 border-bottom" id="education">
									<div class="list-group list-group-flush">
										<div
											v-for="(item, index) in education"
											:key="index"
											class="list-group-item py-4"
											v-motion
											:enter="enterSlideFromBottomToTop"
											:initial="initialSlideFromBottomToTop"
										>
											<div class="row align-items-start align-items-md-center">
												<div class="col-4 col-md-3">
													<div class="bg-white rounded-circle p-3">
														<nuxt-img
															:src="
																item.logo ?? '/images/education/default.png'
															"
															:alt="item.logo ? item.name : 'KEMENDIKBUD'"
															class="w-100 ratio ratio-1x1"
														/>
													</div>
												</div>
												<div class="col-8 col-md-9">
													<div class="card-body">
														<h3 class="card-title mb-2">{{ item.name }}</h3>
														<div
															class="card-text flex-wrap align-items-center d-flex gap-2 mb-3"
														>
															<span v-if="item.departement">
																{{ item.departement }}
																<span v-if="item.study_program"
																	>/ {{ item.study_program }}</span
																>
																&bullet;
															</span>
															<a
																v-if="item.web"
																class="text-decoration-none text-white fw-bold"
																:href="item.web"
															>
																{{
																	item.web?.match(
																		/^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/
																	)?.[1]
																}}
															</a>
															<span v-if="item.web"> &bullet; </span>
															<span v-if="item.grade">{{ item.grade }}</span>
															<span v-if="item.grade">&bullet;</span>
															<span
																class="badge"
																:class="
																	item.end ? 'bg-success' : 'bg-secondary'
																"
															>
																{{
																	item.end
																		? "Lulus"
																		: "Sedang Menempuh Pendidikan"
																}}
															</span>
														</div>
														<p class="card-text">{{ item.place }}</p>
														<div class="d-flex gap-2 align-items-center mb-0">
															<Icon name="fa6-solid:clock" />
															<div class="card-text mb-0">
																{{ dateConverter(item.start) }} s/d
																{{
																	item.end
																		? dateConverter(item.end)
																		: "Sekarang"
																}}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="tab-pane fade"
								id="organization-tab-pane"
								role="tabpanel"
								aria-labelledby="organization-tab"
							>
								<div id="organization">
									<ul class="list-group list-group-flush">
										<li
											v-for="org in organization"
											class="list-group-item d-flex flex-column gap-3 py-4"
											:key="org.orgName"
										>
											<div
												class="d-flex gap-3 align-items-start align-items-md-center"
											>
                        <Icon name="fa6-solid:person-running" size="48" />
												<div class="content">
													<h3>{{ org.orgName }}</h3>
													<p class="mb-0">{{ org.desc }}</p>
													<p class="mb-0">{{ org.period }}</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card sticky-top rounded-4">
							<div class="card-header p-4">
								<h4 class="mb-0">Navigasi</h4>
							</div>
							<div class="card-body">
								<!-- Tab panes Title -->
								<ul
									class="nav nav-pills flex-column align-items-stretch"
									v-motion
									:enter="enterSlideFromBottomToTop"
									:initial="initialSlideFromBottomToTop"
									id="myTab"
									role="tablist"
								>
									<li class="nav-item" role="presentation">
										<button
											class="nav-link py-3 w-100 text-start active"
											id="education-tab"
											data-bs-toggle="tab"
											data-bs-target="#education-tab-pane"
											type="button"
											role="tab"
											aria-controls="education-tab-pane"
											aria-selected="true"
										>
											Riwayat Pendidikan
										</button>
									</li>
									<li class="nav-item" role="presentation">
										<button
											class="nav-link py-3 w-100 text-start"
											id="organization-tab"
											data-bs-toggle="tab"
											data-bs-target="#organization-tab-pane"
											type="button"
											role="tab"
											aria-controls="organization-tab-pane"
											aria-selected="false"
										>
											Riwayat Organisasi dan Kepanitiaan
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
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
	title: "Riwayat Pendidikan",
});

const dateConverter = (date: string): string => {
	const $dateInstance = new Date(date);
	const $date = $dateInstance?.getDate();
	const $month = $dateInstance?.getMonth();
	const $year = $dateInstance?.getFullYear();

	const monthName = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"Mei",
		"Jun",
		"Jul",
		"Ags",
		"Sep",
		"Okt",
		"Nov",
		"Des",
	];

	return `${$date} ${monthName[$month]} ${$year}`;
};

const organization = ref([
	{
		orgName: "UKM PALS",
		desc: "Wakil Ketua 2",
		period: "2024 - Sekarang",
	},
	{
		orgName: "UKM PALS",
		desc: "Divisi Kominfo",
		period: "2023 - 2024",
	},
	{
		orgName: "Dewan Kerja Daerah Jawa Timur",
		desc: "Panitia Sangga Kerja Divisi Humas dan Publikasi",
		period: "2022 - 2023",
	},
	{
		orgName: "Humas Dewan Kerja Nasional",
		desc: "Divisi Website",
		period: "2022 - 2023",
	},
	{
		orgName: "Winscout SMASA Ngawi",
		desc: "Bidang Bimbingan Dan Pengembangan (HUMAS dan Publikasi)",
		period: "2021 - 2022",
	},
	{
		orgName: "Artesis SMASA NGAWI",
		desc: "Bidang Humas dan Teknologi Informasi dan Publikasi",
		period: "2021 - 2022",
	},
	{
		orgName: "Dewan Penggalang SMP Negeri 1 Padas",
		desc: "Divisi Perlengkapan dan Persiapan Kegiatan",
		period: "2016 - 2017",
	},
]);

const education = ref([
	{
		name: "Politeknik Negeri Madiun",
		logo: "/images/education/pnm.png",
		web: "https://www.pnm.ac.id",
		level: "university",
		grade: "Diploma 3 (D3)",
		departement: "Teknik",
		study_program: "Teknologi Informasi",
		start: "2022-07-12",
		end: null,
		place: "Jl. Serayu, Taman, Kota Madiun, Jawa Timur",
	},
	{
		name: "SMA Negeri 1 Ngawi",
		logo: "/images/education/smasa.png",
		web: "https://www.sman1ngawi.sch.id",
		level: "shs",
		grade: null,
		departement: "Matematika dan IPA",
		study_program: null,
		start: "2018-07-12",
		end: "2021-03-17",
		place:
			"Jl. Ahmad Yani No.45, Wareng, Beran, Kec. Ngawi, Kabupaten Ngawi, Jawa Timur 63216",
	},
	{
		name: "SMP Negeri 1 Padas",
		logo: null,
		web: null,
		level: "jhs",
		grade: null,
		departement: null,
		study_program: null,
		start: "2015-07-12",
		end: "2018-03-17",
		place:
			"Jl. Raya Padas-Ngawi, Padas I, Padas, Kec. Padas, Kabupaten Ngawi, Jawa Timur 63281",
	},
	{
		name: "SD Negeri Munggut 1",
		logo: null,
		web: null,
		level: "es",
		grade: null,
		departement: null,
		study_program: null,
		start: "2009-07-12",
		end: "2015-06-17",
		place:
			"Jl. A. Yani No.35, Munggut, Kec. Padas, Kabupaten Ngawi, Jawa Timur 63281",
	},
	{
		name: "TPQ Al-Falahiyyah",
		logo: null,
		web: null,
		level: "kg",
		grade: null,
		departement: null,
		study_program: null,
		start: "2007-05-21",
		end: "2009-03-17",
		place: "Tangerang, Banten",
	},
]);
</script>

<style scoped lang="scss">
.nav-pills {
	.nav-item {
		.nav-link {
			color: var(--bs-body-color);
			opacity: 0.75;

			&.active {
				background-color: transparent;
				box-shadow: none;
				opacity: 1;
			}
		}

		&:first-child {
			border-bottom: 1px solid var(--bs-card-border-color);
		}
	}
}

.card {
	&.sticky-top {
		position: sticky;
		top: 7.5rem;
		z-index: 1020;
	}
}
</style>