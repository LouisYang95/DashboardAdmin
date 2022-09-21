import Dashboard from '../components/Dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

import SecondPage from '../pages/SecondPage.vue'
import Formulaire from '../components/Formulaire.vue'

// declaration des différentes routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard

    },
    {
        name: 'secondpage',
        path: '/secondpage',
        component: SecondPage
    },
    {
        naem: 'formulaire',
        path: '/create-products',
        component: Formulaire
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router