import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/Homeview.vue";
import CategoryView from "./views/CategoryView.vue";
import ProductDetailView from "./views/ProductDetailView.vue"

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/category/:id',
        component: CategoryView
    },
    {
        path: '/detail/:id',
        component: ProductDetailView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

