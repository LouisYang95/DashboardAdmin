import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(createPinia()).use(createPinia()).mount('#app')
