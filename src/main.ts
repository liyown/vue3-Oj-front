
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import 'bytemd/dist/index.css'
import '@/assets/custom.css'
import App from './App.vue'
import router from './router'
import "@/plugin/axios"
import "@/plugin/monaco"

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')



