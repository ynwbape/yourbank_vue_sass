import { createApp } from 'vue'
import './assets/stylesheets/main.scss'
import App from './App.vue'
import router from './router/router'

createApp(App).use(router).mount('#app')