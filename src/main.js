import { createApp } from "vue"
import "@/assets/scss/app.scss"
import App from "@/layouts/App.vue"
import router from "@/plugins/router"

const VApp = createApp(App)
VApp.use(router)
VApp.mount("#app")
