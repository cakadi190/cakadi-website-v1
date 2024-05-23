<template>
	<div id="about-me">
		<header-page>
			<template #title>Tentang Saya</template>
			<template #subtitle>Berikut sekilas tentang diri saya pribadi</template>
		</header-page>

		<section class="need-space pt-0">
			<div class="container">
				<div class="row">
					<div class="col-md-9">
						<!-- About Me -->
						<div id="about-me">
							<div class="row gy-3 pb-5">
								<div class="col-md-4">
									<div
										v-motion
										:enter="enterSlideFromBottomToTop"
										:initial="initialSlideFromBottomToTop"
										class="card card-body rounded-4 p-4 text-center align-items-center"
									>
										<Icon name="fa6-solid:medal" size="48" />
										<strong class="h3 mb-0 pt-3">6 Tahun</strong>
										<span>Berpengalaman</span>
									</div>
								</div>
								<div class="col-md-4">
									<div
										v-motion
										:enter="enterSlideFromBottomToTop"
										:initial="initialSlideFromBottomToTop"
										class="card card-body rounded-4 p-4 text-center align-items-center"
									>
										<Icon name="fa6-solid:handshake" size="48" />
										<strong class="h3 mb-0 pt-3">3 Tahun</strong>
										<span>Melayani</span>
									</div>
								</div>
								<div class="col-md-4">
									<div
										v-motion
										:enter="enterSlideFromBottomToTop"
										:initial="initialSlideFromBottomToTop"
										class="card card-body rounded-4 p-4 text-center align-items-center"
									>
										<Icon name="fa6-solid:briefcase" size="48" />
										<strong class="h3 mb-0 pt-3">125</strong>
										<span>Proyek</span>
									</div>
								</div>
							</div>

							<div class="mb-5 pb-5 border-bottom">
								<div class="row gy-4">
									<div class="col-md-5">
										<nuxt-img
											src="/images/programmer.svg"
											v-motion
											:enter="enterSlideFromLeftToRight"
											:initial="initialSlideFromLeftToRight"
											class="w-100"
										/>
									</div>
									<div
										class="col-md-7"
										v-motion
										:enter="enterSlideFromRightToLeft"
										:initial="initialSlideFromRightToLeft"
									>
										<p>
											Hai, saya <strong>Amir Zuhdi Wibowo</strong>, seorang
											<strong>Fullstack Web Developer</strong> yang hobi ngulik
											dari front-end sampai back-end. Saya senang membuat
											aplikasi web yang nggak cuma berfungsi dengan baik tapi
											juga enak dilihat. Dari HTML, CSS, JavaScript, sampai PHP,
											saya punya pengalaman yang luas untuk memastikan proyek
											web berjalan lancar dan terlihat menarik.
										</p>
										<p>
											Selain coding, saya juga jago di beberapa bidang IT
											lainnya. Saya bisa bikin desain grafis yang kece dengan
											Photoshop dan Illustrator, merancang UI/UX yang
											user-friendly pakai Figma, dan bahkan reparasi komputer
											ringan kalau ada masalah. Kombinasi keterampilan ini bikin
											saya siap banget untuk memberikan yang terbaik di setiap
											proyek yang saya kerjakan.
										</p>
									</div>
								</div>
							</div>
						</div>

						<!-- Skills -->
						<div id="skills">
							<h4>Keahlian Saya</h4>
							<p class="opacity-75 mb-5">Keahlian profesional saya.</p>

							<div class="skill-main-wrapper">
								<div
									class="skill"
									v-for="(item, index) in skillset"
									:key="index"
								>
									<Icon :name="item.icon" />
									<p class="m-0">{{ item.name }}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div
							class="card sticky-top rounded-4"
							v-motion
							:enter="enterSlideFromBottomToTop"
							:initial="initialSlideFromBottomToTop"
						>
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
										<a
                      href="#about-me"
											class="nav-link py-3 w-100 text-start"
										>
											Tentang Saya
										</a>
									</li>
									<li class="nav-item" role="presentation">
										<a
                      href="#skills"
											class="nav-link py-3 w-100 text-start"
										>
                      Keahlian
										</a>
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
	initialSlideFromLeftToRight,
	enterSlideFromLeftToRight,
	initialSlideFromRightToLeft,
	enterSlideFromRightToLeft,
} from "~/components/motion";

const skillset = ref([
	{ icon: "devicon:laravel", name: "Laravel" },
	{ icon: "devicon:nodejs", name: "NodeJS" },
	{ icon: "devicon:python", name: "Python" },
	{ icon: "devicon:java", name: "Java" },
	{ icon: "devicon:dart", name: "Dart" },
	{ icon: "devicon:kotlin", name: "Kotlin" },
	{ icon: "devicon:php", name: "PHP" },
	{ icon: "devicon:html5", name: "HTML" },
	{ icon: "devicon:css3", name: "CSS" },
	{ icon: "devicon:javascript", name: "Javascript" },
	{ icon: "devicon:vuejs", name: "VueJS" },
	{ icon: "devicon:bootstrap", name: "Bootstrap" },
	{ icon: "devicon:tailwindcss", name: "TailwindCSS" },
	{ icon: "devicon:jquery", name: "jQuery" },
	{ icon: "devicon:typescript", name: "Typescript" },
	{ icon: "devicon:git", name: "Git" },
	{ icon: "devicon:figma", name: "Figma" },
	{ icon: "logos:adobe-illustrator", name: "Adobe Illustrator" },
	{ icon: "devicon:canva", name: "Canva" },
	{ icon: "logos:adobe-photoshop", name: "Adobe Photoshop" },
	{ icon: "logos:visual-studio-code", name: "Visual Studio Code" },
	{ icon: "file-icons:coreldraw", name: "CorelDraw" },
]);

useHead({
	title: "Tentang Saya",
});
</script>

<style lang="scss">
.card {
	&.sticky-top {
		position: sticky;
		top: 7.5rem;
		z-index: 1020;
	}
}

@keyframes scroll {
	0% {
		transform: translateX(100%);
	}

	to {
		transform: translateX(-100%);
	}
}

.skill-main-wrapper {
	display: flex;
	gap: 0.75rem;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;

	.skill {
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		font-size: 1.25em;
		align-items: center;
		gap: 1rem;
		white-space: nowrap;
		background: rgba(var(--bs-body-color-rgb), 0.125);
		transition: outline 0.5s all;
		position: relative;
		z-index: 0;
		cursor: pointer;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 0.5rem;
			pointer-events: none;
			background-color: rgba(var(--bs-primary-rgb), 0.25);
			opacity: 0;
			transition: opacity 0.2s ease;
			transform: scale(0.9);
		}

		&:hover::after {
			opacity: 1;
			transform: scale(1);
		}
	}
}
</style>

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