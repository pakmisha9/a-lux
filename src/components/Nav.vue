<script setup>
import { ref, watch, onMounted } from "vue"
import MobileNav from "@/components/MobileNav.vue"
const items = ref([
	{
		title: "Алматы",
		link: ""
	},
	{
		title: "Астана",
		link: ""
	},
	{
		title: "Другие",
		link: ""
	},
	{
		title: "О нас",
		link: ""
	}
])

const isActiveMobileNav = ref(false)
const isPageScroll = ref(false)

watch(isActiveMobileNav, (newValue, oldValue) => {
	if (newValue == true) {
		document.querySelector("html").classList.add("no-scroll")
		console.log("true")
	} else {
		document.querySelector("html").classList.remove("no-scroll")
	}
})
onMounted(() => {
	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 100) {
			isPageScroll.value = true
		} else {
			isPageScroll.value = false
		}
	})
})
</script>

<template>
	<div class="nav fixed inset-x-0 top-0 z-40" :class="{ active: isPageScroll }">
		<div class="w-container py-3">
			<div class="flex items-center justify-between">
				<div>
					<router-link to="/" class="inline-block">
						<img src="@/assets/img/icons/logo.svg" class="w-20" alt="" />
					</router-link>
				</div>

				<nav class="hidden lg:block">
					<ul class="flex items-center space-x-10">
						<li v-for="(item, index) in items" :key="index">
							<router-link to="" class="font-semibold uppercase text-brand-dark">{{ item.title }}</router-link>
						</li>
					</ul>
				</nav>
				<div class="relative z-50 block lg:hidden">
					<button class="hamburger" @click.prevent="isActiveMobileNav = !isActiveMobileNav" :class="{ isActive: isActiveMobileNav }"></button>
				</div>
			</div>
		</div>
		<MobileNav :isActive="isActiveMobileNav" :items="items" />
	</div>
</template>

<style lang="scss" scoped>
.nav {
	@apply transition-all duration-300 ease-in-out;
	&.active {
		@apply bg-white/60 backdrop-blur-2xl;
	}
}
</style>
