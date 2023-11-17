<script setup>
import data from "@/assets/helpers.json"
import SchemaItem from "@/components/SchemaItem.vue"
import { ref, onMounted } from "vue"

onMounted(() => {})
</script>

<template>
	<div>
		<div class="mb-10 text-center lg:mb-24 2xl:mb-32">
			<h2 class="font-heading text-xl uppercase text-brand-dark xl:text-3xl 2xl:text-4xl">Увлекательный маршрут по городу</h2>
		</div>
		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-0">
			<div class="schema-item" v-for="(item, index) in data" :key="index">
				<SchemaItem :item="item" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.schema-item {
	&:nth-child(even) {
		@apply lg:mt-20;
	}
	&:nth-child(3n + 1) {
		@apply lg:ml-24;
	}
}
</style>
