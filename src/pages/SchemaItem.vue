<script setup>
import data from "@/assets/helpers.json"
import Map from "@/components/Map.vue"
import { useRoute } from "vue-router"
const route = useRoute()
import { ref, onMounted } from "vue"

onMounted(() => {
	getItems()
})

const item = ref(null)

const getItems = () => {
	data.forEach(el => {
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
						<img :src="'/img/' + item.image + '.' + item.type" class="h-full w-full object-cover" alt="" />
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
