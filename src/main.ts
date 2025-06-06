
import router from './router/router.ts'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import "./assets/css-1/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'primeicons/primeicons.css'
const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(router)
app.mount('#app')
