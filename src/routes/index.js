import {createRouter, createWebHistory} from "vue-router";

import Login from '../pages/PLogin'
import Register from '../pages/PRegister'
import Home from '../pages/PHome'
import Routines from '../pages/PRoutines'
import Test from '../pages/PNavbar'

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
    },
    {
        path: '/routines',
        name: 'Routines',
        component: Routines
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router