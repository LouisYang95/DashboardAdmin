import ProductsBoard from '../components/ProductsBoard.vue'
import { createRouter, createWebHistory } from 'vue-router'

import FormAddClient from '../components/forms/FormAddClient.vue'
import CommandsBoard from '../components/CommandsBoard.vue'
import FormAddProduct from '../components/forms/FormAddProduct.vue'
import ClientBoard from '../components/ClientBoard.vue'
import CategoriesBoard from '../components/CategoriesBoard.vue'

// declaration des différentes routes
const routes = [
    {
        name: 'productBoard',
        path: '/',
        component: ProductsBoard

    },
    {
        name: 'commandsBoard',
        path: '/commands',
        component: CommandsBoard
    },
    {
        name: 'formulaireProducts',
        path: '/products/add',
        component: FormAddProduct
    },
    {
        name: 'clientBoard',
        path: '/clients',
        component: ClientBoard
    },
    {
        name:'formulaireClients',
        path: '/clients/add',
        component: FormAddClient
    },

    {
        name: 'categoriesBoard',
        path: '/categories',
        component: CategoriesBoard
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router