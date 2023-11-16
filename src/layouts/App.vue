<script setup>
import Footer from "@/components/Footer.vue"
</script>

<template>
	<main>
		<transition name="slide-fade" mode="out-in" appear>
			<router-view />
		</transition>
	</main>
	<Footer />
</template>

<style scoped></style>
