import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import routes from 'virtual:generated-pages'

const router=createRouter({
    history:createWebHistory(),
    routes:routes
})

const app=createApp(App)
app.use(router).mount('#app')
