<script setup>
import { onMounted, ref } from "vue"
import data from "@/assets/helpers.json"

onMounted(() => {
	ymaps.ready(init)
	function init() {
		if (document.getElementById("map")) {
			var myMap = new ymaps.Map("map", {
				center: [43.24807807452589, 76.9118235],
				zoom: 16
			})
			console.log("map" + data)
			for (let item of data) {
				console.log("map item " + JSON.stringify(item))
				const place = new ymaps.Placemark(
					[item.lat, item.long],
					{
						balloonContentHeader: item.name,
						balloonContentBody: `<a href="${item.slug}">Перейти</a><br><img src="/src/assets/${item.image}" height="100" width="200"/>`
					},
					{
						iconLayout: "default#image",
						iconImageHref: "/src/assets/img/icons/geo.svg",
						iconImageSize: [50, 50],
						iconImageOffset: [-3, -42]
					}
				)
				myMap.geoObjects.add(place)
			}
		}
	}
})
</script>

<template>
	<div>
		<div id="map" style="width: 100%; height: 700px"></div>
	</div>
</template>

<style lang="scss" scoped></style>
