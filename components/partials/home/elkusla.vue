<template>
	<section class="need-space pt-5" id="elkusla-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="elkusla-wrapper">
						<span class="quot opacity-75">&quot;</span>
						<div class="content">
							<div class="title-top opacity-75">Eling, Kuat</div>
							<div class="title-separator">
								<div class="hr" />
								<span>Slamet!</span>
								<div class="hr" />
							</div>
							<div class="title-bottom">
								<span class="opacity-75 d-inline-block">&</span> <strong class="opacity-100 d-inline-block">Eling</strong> <div class="opacity-75 d-inline-block">Lan</div> <strong class="opacity-100 d-inline-block">Waspodo</strong>
							</div>
							<p class="mb-0 h5 text-start text-lg-center pt-3 opacity-75">
								Batara Ismaya Batara Iswara Jurudyah Punta Prasanta Semar
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
</script>

<script lang="ts">
export default defineComponent({
	name: "ElukslaSection",
});
</script>

<style lang="scss" scoped>
.elkusla-wrapper {
	display: flex;
	gap: 1rem;
	width: 100%;

	.quot {
		font-size: 7.5rem;
		line-height: 1;

		@media screen and (max-width: 768px) {
			font-size: 6rem;
		}
	}

	.content {
		display: flex;
		gap: 0.25rem;
		flex-grow: 1;
		flex-direction: column;

		.title-top,
		.title-bottom {
			font-size: 3rem;
			line-height: 1;

			@media screen and (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.title-separator {
			display: flex;
			align-items: center;

			.hr {
				height: 6px;
				border-radius: 90rem;
				background: var(--bs-gray-300);
				width: 9rem;

				@media screen and (max-width: 768px) {
					width: 3rem;
					height: 4px;
				}
			}

			span {
				background: white;
				font-size: 4rem;
				margin: 0 2rem;
				display: flex;
				align-items: center;
				justify-content: center;
				font-style: italic;
				font-weight: bold;

        [data-bs-theme=dark] & {
          background: var(--bs-body-bg);
        } 

				@media screen and (max-width: 768px) {
					font-size: 2.5rem;
					margin: 0 0.75rem;
				}
			}
		}

		.title-bottom {
			text-align: right;

			@media screen and (max-width: 768px) {
				text-align: left;
			}
		}
	}
}
</style>