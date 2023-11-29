import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import Careers from '../pages/Careers.vue'
import About from '../pages/About.vue'
import Security from '../pages/Security.vue'
import Signin from '../pages/profile/Signin.vue'
import Login from '../pages/profile/Login.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/careers', component: Careers},
    {path: '/about', component: About},
    {path: '/security', component: Security},
    {path: '/signin', component: Signin},
    {path: '/login', component: Login},
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;