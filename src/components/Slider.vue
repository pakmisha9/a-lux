<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
</script>

<template>
	<div>
		<div class="mb-5 text-center xl:mb-10">
			<h2 class="font-heading text-xl uppercase text-brand-dark xl:text-3xl 2xl:text-4xl">текст с заголовком</h2>
		</div>
		<div class="flex flex-col items-center justify-between gap-5 xl:flex-row xl:gap-14">
			<div class="w-full text-sm lg:text-base xl:w-2/3">
				Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья Баум и другие.
				<br />
				<br />
				В советский период истории в нашем городе жили и работали немцы – представители творческой и научной интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в 1941 г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана, переехали в Алма-Ату.
				<br />
				<br />
				Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении достойной памяти о нем!
			</div>
			<div class="w-full xl:w-1/3">
				<swiper class="sw-banner" :slides-per-view="1" :space-between="10">
					<swiper-slide>
						<div class="banner">
							<img src="@/assets/img/places/place-1.jpg" alt="" />
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="banner">
							<img src="@/assets/img/places/place-2.jpg" alt="" />
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="banner">
							<img src="@/assets/img/places/place-4.jpg" alt="" />
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="banner">
							<img src="@/assets/img/places/place-1.jpg" alt="" />
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sw-banner {
	.banner {
		@apply h-[400px] w-full overflow-hidden rounded-3xl xl:h-[500px];
		img {
			@apply h-full w-full object-cover;
		}
	}
}
</style>
