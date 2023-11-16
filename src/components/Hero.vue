<script setup></script>

<template>
	<div class="hero w-full bg-cover bg-center bg-no-repeat">
		<div class="w-container pb-16 pt-32 lg:pb-32 lg:pt-44">
			<div class="flex flex-col-reverse items-center justify-between lg:flex-row">
				<div class="mt-14 text-center lg:mt-0 lg:text-left">
					<h1 class="font-heading text-brand-dark mb-4 text-4xl lg:text-5xl">Almaty</h1>
					<p>прогулка по «немецкой» истории города</p>
				</div>
				<div class="relative lg:h-[400px] lg:w-1/2 xl:h-[450px]">
					<div class="relative z-20 h-full w-full overflow-hidden rounded-full">
						<img src="@/assets/img/bg/hero-bg.png" class="h-full w-full object-cover" alt="" />
					</div>
					<div class="absolute -left-3 -top-3 z-30 lg:-left-5 lg:-top-5 xl:-left-10 xl:-top-10">
						<img src="@/assets/img/vectors/hero.png" class="w-[150px] lg:w-[250px] xl:w-auto" alt="" />
					</div>
					<div class="absolute -bottom-5 -right-5 z-10 xl:-bottom-10 xl:-right-10 2xl:-right-20">
						<img src="@/assets/img/vectors/under-hero.png" class="w-[250px] lg:w-[400px] xl:w-auto" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	background-image: url("@/assets/img/bg/main-banner.png");
}
</style>
