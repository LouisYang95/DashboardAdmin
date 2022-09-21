import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SecondPage from '../pages/SecondPage.vue'

// declaration des différentes routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage

    },
    {
        name: 'secondpage',
        path: '/secondpage',
        component: SecondPage
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router