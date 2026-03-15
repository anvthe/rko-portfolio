// src/router/index.js or wherever your router is defined

import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from "@/views/portfolio.vue";

const routes = [
    {
        path: '/',
        name: 'portfolio',
        component: Portfolio,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
