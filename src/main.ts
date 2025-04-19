import './assets/main.css'
import '@splidejs/vue-splide/css/skyblue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createYmaps } from 'vue-yandex-maps'

// 93a7b337-c4cc-4afa-ac28-b9fd05f89ecd

const app = createApp(App)

app.use(router).use(
  createYmaps({
    apikey: '93a7b337-c4cc-4afa-ac28-b9fd05f89ecd',
  }),
)

app.mount('#app')
