import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes : [
    { path: "/", component: () => import("~/pages/LoginPage.vue") },
    { path: "/login", component: () => import("~/pages/LoginPage.vue") },
    { path: "/signupstudent", component: () => import("~/pages/SignupSt.vue") },
    { path: "/signupcompany", component: () => import("~/pages/SignupCompany.vue") },
    { path: "/dashstudent", component: () => import("~/pages/DashboardSt.vue") },
    { path: "/dashcompany", component: () => import("~/pages/DashboardCompany.vue") },
    { path: "/forgotpass", component: () => import("~/pages/ForgotPassword.vue") },
    { path: "/test", component: () => import("~/pages/Test.vue") },
    ],
    
 
});

export default router;