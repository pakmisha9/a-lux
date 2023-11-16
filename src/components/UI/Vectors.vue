<script setup>
defineProps({
	item: {
		type: Object
	}
})
</script>

<template>
	<div v-if="item.id == 2" class="lg:block hidden absolute right-10 top-1/2 z-10 -translate-y-1/2">
		<svg width="580" height="157" viewBox="0 0 580 157" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2C14.0029 3.50037 25.6789 9.36957 37.795 9.36957C82.0825 9.36957 109.104 80.5385 153.392 80.5385C230.135 80.5385 323.555 -2.04851 400.377 3.68451C421.896 5.29039 443.258 5.57953 464.808 5.57953C490.013 5.57953 503.777 16.5113 526.713 24.3193C548.919 31.879 550.845 30.6151 562.718 48.1124C570.79 60.0077 573.123 67.331 577.036 80.5385C583.97 103.939 556.889 136.333 546.084 154.655" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 3" class="lg:block hidden absolute -top-20 left-0 z-10">
		<svg width="700" height="214" viewBox="0 0 435 214" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M432.593 2C417.462 27.6571 396.711 34.5434 371.11 50.218C336.771 71.2414 298.859 88.0567 268.146 114.438C251.025 129.145 223.236 155.734 199.504 159.077C129.825 168.891 68.8308 191.112 2 212.138" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 4" class="lg:block hidden absolute right-20 top-0 z-10 -rotate-12">
		<svg width="600" height="188" viewBox="0 0 585 188" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2C22.459 13.5082 45.8266 41.2843 68.326 45.3751C87.0084 48.7719 104.281 57.5352 123.282 60.5353C202.207 72.9971 249.702 186.048 329.84 186.048C403.696 186.048 509.205 110.456 582.721 117.807" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 5" class="lg:block hidden absolute -top-32 left-0 z-10">
		<svg width="800" height="214" viewBox="0 0 435 214" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M432.593 2C417.462 27.6571 396.711 34.5434 371.11 50.218C336.771 71.2414 298.859 88.0567 268.146 114.438C251.025 129.145 223.236 155.734 199.504 159.077C129.825 168.891 68.8308 191.112 2 212.138" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 6" class="lg:block hidden absolute right-10 top-20 z-10">
		<svg width="493" height="69" viewBox="0 0 493 69" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2C24.3684 9.15789 48.363 23.9055 71.4844 28.1094C101.346 33.5388 129.167 52.3804 157.813 61.5881C171.207 65.8932 192.332 64.8332 206.453 66.0099C237.058 68.5603 268.804 66.2205 299.52 66.2205C363.309 66.2205 427.133 66.8583 490.917 66.2205" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 7" class="lg:block hidden absolute -top-32 left-0 z-10 -rotate-12">
		<svg width="700" height="214" viewBox="0 0 435 214" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M432.593 2C417.462 27.6571 396.711 34.5434 371.11 50.218C336.771 71.2414 298.859 88.0567 268.146 114.438C251.025 129.145 223.236 155.734 199.504 159.077C129.825 168.891 68.8308 191.112 2 212.138" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 8" class="lg:block hidden absolute right-20 top-0 z-10 -rotate-12">
		<svg width="600" height="188" viewBox="0 0 585 188" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2C22.459 13.5082 45.8266 41.2843 68.326 45.3751C87.0084 48.7719 104.281 57.5352 123.282 60.5353C202.207 72.9971 249.702 186.048 329.84 186.048C403.696 186.048 509.205 110.456 582.721 117.807" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
	<div v-if="item.id == 9" class="lg:block hidden absolute -top-24 left-0 z-10 -rotate-12">
		<svg width="800" height="214" viewBox="0 0 435 214" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M432.593 2C417.462 27.6571 396.711 34.5434 371.11 50.218C336.771 71.2414 298.859 88.0567 268.146 114.438C251.025 129.145 223.236 155.734 199.504 159.077C129.825 168.891 68.8308 191.112 2 212.138" stroke="#AB9995" stroke-width="3" stroke-linecap="round" stroke-dasharray="9 9" />
		</svg>
	</div>
</template>

<style lang="scss" scoped></style>
