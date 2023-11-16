<script setup>
defineProps({
	isActive: {
		type: Boolean,
		default: false
	},
	items: {
		type: Array
	}
})
</script>

<template>
	<div>
		<div class="mobile-nav" :class="{ 'is-active': isActive }">
			<!-- <div class="absolute inset-0 h-full w-full bg-brand-dark/50"></div> -->
			<div class="relative z-20 h-full w-full p-5">
				<div class="mt-32">
					<ul>
						<li v-for="(item, index) in items" :key="index" :style="'transition-delay:' + (index + 2) * 120 + 'ms;'">
							<a href="/" class="link">
								<span>{{ item.title }}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mobile-nav {
	@apply invisible fixed inset-0 z-40 h-full w-full translate-x-20 bg-white opacity-0  transition-all duration-300 ease-in-out;

	ul {
		li {
			@apply pointer-events-auto invisible translate-y-20 opacity-0 transition duration-300 ease-in-out;
			.link {
				@apply flex w-full items-center justify-center border-b py-5 text-2xl text-black;
			}
		}
	}
	&.is-active {
		@apply visible translate-x-0 opacity-100;
		ul {
			li {
				@apply visible translate-y-0 opacity-100;
			}
		}
	}
}
</style>
