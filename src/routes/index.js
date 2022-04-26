import {createRouter, createWebHistory} from "vue-router";

import Login from '../pages/PLogin'
import Register from '../pages/PRegister'
import Home from '../pages/PHome'
import Routines from '../pages/PRoutines'
import Categories from '../pages/PCategories'
import Trainer from '../pages/PAdmin.vue'
import AdminExercises from '../pages/AdminExercises.vue'
import AdminRoutines from '../pages/AdminRoutines.vue'
import PageNotFound from '../pages/PageNotFound'

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
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/trainer',
        name: 'Trainer',
        component: Trainer
    },
    {
        path: '/trainer/exercises',
        name: 'AdminExercises',
        component: AdminExercises
    },
    {
        path: '/trainer/routines',
        name: 'AdminRoutines',
        component: AdminRoutines
    },
    {
        path: "/:catchAll(.*)",
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router