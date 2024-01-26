import * as VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Careers from '../pages/Careers.vue';
import About from '../pages/About.vue';
import Security from '../pages/Security.vue';
import Signup from '../pages/profile/Signup.vue';
import Login from '../pages/profile/Login.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/careers', component: Careers},
    {path: '/about', component: About},
    {path: '/security', component: Security},
    {path: '/signup', component: Signup},
    {path: '/login', component: Login},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;