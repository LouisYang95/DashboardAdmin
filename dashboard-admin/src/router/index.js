import ProductsBoard from '../components/ProductsBoard.vue'
import { createRouter, createWebHistory } from 'vue-router'

import SecondPage from '../pages/SecondPage.vue'
import FormAddProduct from '../components/FormAddProduct.vue'

// declaration des différentes routes
const routes = [
    {
        name: 'home',
        path: '/',
        component: ProductsBoard

    },
    {
        name: 'secondpage',
        path: '/secondpage',
        component: SecondPage
    },
    {
        naem: 'formulaireProducts',
        path: '/products/add',
        component: FormAddProduct
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router