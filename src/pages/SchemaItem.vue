<script setup>
// import data from "@/assets/helpers.json"
import Map from "@/components/Map.vue"
import { useRoute } from "vue-router"
const route = useRoute()
import { ref, onMounted } from "vue"

const data = ref([
	{
		id: 1,
		name: "Роща Баума",
		image: "img/places/place-1.jpg",
		slug: "1",
		lat: "43.24750555013902",
		long: "76.91522454103087"
	},
	{
		id: 2,
		name: "Дом Баума",
		image: "img/places/place-2.jpg",
		slug: "2",
		lat: "43.245340888407654",
		long: "76.91969846566768"
	},
	{
		id: 3,
		name: "Академия наук",
		image: "img/places/place-3.jpeg",
		slug: "3",
		lat: "43.24661492519598",
		long: "76.9103855588221"
	},
	{
		id: 4,
		name: "Памятник Г.К. Бельгеру",
		image: "img/places/place-4.jpg",
		slug: "4",
		lat: "43.25043488740608",
		long: "76.9112186180247"
	},
	{
		id: 5,
		name: "Немецкий Дом",
		image: "img/places/place-5.jpg",
		slug: "5",
		lat: "43.249968185074216",
		long: "76.90530611475234"
	},
	{
		id: 6,
		name: "Мемориальная доска Э.Ф. Айриху.",
		image: "img/places/place-6.jpg",
		slug: "6",
		lat: "43.246924972691716",
		long: "76.90069468166564"
	},
	{
		id: 7,
		name: "Стадион «Динамо»",
		image: "img/places/place-1.jpg",
		slug: "7",
		lat: "43.24102986824371",
		long: "76.89970672236744"
	},
	{
		id: 8,
		name: "Казахстанско-Немецкий университет",
		image: "img/places/place-2.jpg",
		slug: "8",
		lat: "43.237999204620166",
		long: "76.90468787320346"
	},
	{
		id: 9,
		name: "Музеи",
		image: "img/places/place-3.jpeg",
		slug: "9",
		lat: "43.23521449584587",
		long: "76.90246700413911"
	}
])
onMounted(() => {
	getItems()
})

const item = ref(null)

const getItems = () => {
	data.value.forEach(el => {
		if (el.slug === route.params.slug) {
			item.value = el
		}
	})
}
</script>

<template>
	<section>
		<div class="w-container y-distance">
			<div v-if="item != null" class="flex flex-col items-center justify-between gap-10 xl:flex-row">
				<div class="w-full xl:w-1/2">
					<div>
						<router-link to="/" class="mb-4 inline-block rounded bg-red-500 px-5 py-3 text-white">Вернуться назад</router-link>
						<p class="mb-5 text-4xl font-semibold text-brand-dark">{{ item.name }}</p>
						<p class="max-w-[300px] text-sm uppercase">Наш проект создан для каких-то важных целей и поможет вам</p>
					</div>
					<div class="mt-5">
						Даже самый заядлый путешественник откроет для себя в Казахстане много интересного и прекрасного: горные вершины, покрытые снегом, обширные плоскогорья, глубокие реки, засушливые пустыни, бескрайние поля, покрытые цветам и девственные заповедные леса.
						<br />
						<br />
						Невозможно рассказать обо всех живописных уголках страны на нескольких страницах. Незабываемы наскальные рисунки и скульптуры национального парка Баянаул, природный заповедник Кургалжин, где можно увидеть более чем 300 видов растений и самую северную в мире колонию фламинго.
					</div>
				</div>
				<div class="relative w-full xl:w-[40%]">
					<div class="relative z-20 h-[300px] w-full overflow-hidden rounded-2xl xl:h-[500px] 2xl:h-[600px]">
						<img :src="`/src/assets/${item.image}`" class="h-full w-full object-cover" alt="" />
					</div>
					<div class="absolute -bottom-20 left-5 z-10 hidden w-[600px] xl:block">
						<img src="@/assets/img/vectors/under-hero.png" class="h-full w-full object-cover" alt="" />
					</div>
					<div class="absolute -left-10 bottom-5 z-30 hidden w-[150px] xl:block">
						<img src="@/assets/img/vectors/cl-1.png" class="h-full w-full object-cover" alt="" />
					</div>
					<div class="absolute -right-14 top-5 z-30 hidden w-[150px] xl:block">
						<img src="@/assets/img/vectors/cl-2.png" class="h-full w-full object-cover" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<Map />
	</section>
</template>

<style lang="scss" scoped></style>
