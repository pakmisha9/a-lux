<script setup>
import Hero from "@/components/Hero.vue"
import OurRoute from "@/components/OurRoute.vue"
import Schema from "@/components/Schema.vue"
import Slider from "@/components/Slider.vue"
import Nav from "@/components/Nav.vue"
</script>

<template>
	<div>
		<Nav />
		<section>
			<Hero />
		</section>
		<section>
			<div class="w-container y-distance">
				<OurRoute />
			</div>
		</section>
		<section>
			<div class="w-container y-distance">
				<Schema />
			</div>
		</section>
		<section>
			<div class="w-container y-distance">
				<Slider />
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped></style>
