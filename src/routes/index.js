import {createRouter, createWebHistory} from "vue-router";

import Login from '../pages/PLogin'
import Register from '../pages/PRegister'
import Home from '../pages/PHome'

const routes = [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router