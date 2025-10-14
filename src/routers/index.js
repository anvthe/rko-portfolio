// src/router/index.js or wherever your router is defined

import { createRouter, createWebHistory } from 'vue-router'
import RKOPortfolio from "@/views/RKOPortfolio.vue";

const routes = [
    {
        path: '/',
        name: 'RKOPortfolio',
        component: RKOPortfolio,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
