
import router from './router/router.ts'
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css-1/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(App)
app.use(router)
app.mount('#app')
