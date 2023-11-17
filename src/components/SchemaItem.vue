<script setup>
import Vectors from "@/components/UI/Vectors.vue"
const props = defineProps({
	item: {
		type: Object
	}
})
</script>

<template>
	<div class="flex flex-col items-center">
		<router-link :to="'/schema/' + item.slug" class="relative">
			<div class="relative aspect-square h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
				<img v-if="item.image != null" :src="`/src/assets/${item.image}`" class="relative z-30 h-full w-full overflow-hidden rounded-full object-cover" alt="" />
				<div class="absolute left-1/2 top-1/2 z-20 w-[250px] -translate-x-1/2 -translate-y-1/2 lg:w-[350px]">
					<img src="@/assets/img/vectors/under-hero.png" class="h-full w-full" alt="" />
				</div>
				<div class="absolute left-5 top-5 z-40 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300 font-heading lg:h-12 lg:w-12">
					<p class="mb-1">{{ item.id }}</p>
				</div>
			</div>
			<Vectors :item="item" />
		</router-link>
		<div class="mx-auto mt-5 max-w-[250px] text-center text-base font-semibold text-brand-dark lg:mt-10 lg:text-xl">
			{{ item.name }}
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
