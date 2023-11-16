<script setup></script>

<template>
	<a href="@/assets/pdf/pdf-test.pdf" class="border-brand-brown flex w-full items-center justify-center rounded-xl border-2 border-dashed px-5 py-3 xl:px-10 xl:py-6" download>
		<div class="flex items-center">
			<span class="text-brand-dark mr-3 text-sm font-semibold uppercase xl:text-base">
				Скачать маршрут
				<span class="hidden lg:inline-block">: Увлекательный маршрут по городу</span>
			</span>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#474747" viewBox="0 0 256 256"><path d="M48,120H208a8,8,0,0,0,8-8V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM152,44l44,44H152Zm72,108a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM64,144H48a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40H56V160h8a12,12,0,0,1,0,24Zm64-40H112a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h16a36,36,0,0,0,0-72Zm0,56h-8V160h8a20,20,0,0,1,0,40Z"></path></svg>
			</span>
		</div>
	</a>
</template>

<style lang="scss" scoped>
a {
	@apply transition-all duration-300 ease-in-out;
	&:hover {
		@apply border-solid shadow-xl;
	}
}
</style>
