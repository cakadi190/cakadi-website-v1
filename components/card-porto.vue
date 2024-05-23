<script lang="ts" setup>
import {
	initialSlideFromBottomToTop,
	enterSlideFromBottomToTop,
} from "./motion";

const img = useImage();

defineProps<{
	data: any;
}>();
</script>

<template>
	<div
		class="wrapper"
		v-motion
		:enter="enterSlideFromBottomToTop"
		:initial="initialSlideFromBottomToTop"
	>
		<nuxt-link :to="`/portofolio/${data.slug}`" class="card overflow-hidden rounded-4">
			<nuxt-img
				:placeholder="img(`/nuxt.svg`, { h: 10, f: 'png', blur: 2, q: 50 })"
				:src="data.image"
				class="rounded-3 nuxt-img-top"
				:alt="data.name"
				densities="x1 x2"
			/>

			<div class="card-body p-4">
				<h5 class="card-title mb-2">{{ data.name }}</h5>
				<p class="card-text opacity-75">
					{{ data.desc }}
				</p>

				<div class="d-flex gap-2 pt-2">
					<Icon
						:name="item"
            size="24"
						v-for="(item, index) in data.techstack"
						:key="index"
					/>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: "CardPorto",
});
</script>

<style lang="scss" scoped>
.card {
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.025);
		border-color: var(--bs-primary);
	}
}
</style>