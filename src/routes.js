import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/Homeview.vue";
import CategoryView from "./views/CategoryView.vue";
import ProductDetailView from "./views/ProductDetailView.vue";
import CheckoutView from "./views/CheckoutView.vue"

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
    },
    {
        path: '/checkout',
        component: CheckoutView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

