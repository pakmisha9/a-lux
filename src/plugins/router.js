import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import SchemaItem from "@/pages/SchemaItem.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/schema/:slug",
		name: "SchemaItem",
		component: SchemaItem
	}
]

const router = createRouter({
	routes,
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	}
})

export default router
