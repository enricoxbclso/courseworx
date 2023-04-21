import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes : [
    { path: "/", component: () => import("~/pages/LoginPage.vue") },
    { path: "/login", component: () => import("~/pages/LoginPage.vue") },
    { path: "/signup", component: () => import("~/pages/Signup.vue") },
    { path: "/dashboard", component: () => import("~/pages/DashboardSt.vue") },
    ],
    
 
});

export default router;