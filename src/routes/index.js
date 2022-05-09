import {createRouter, createWebHistory} from "vue-router";

import Login from '../pages/PLogin'
import Register from '../pages/PRegister'
import Home from '../pages/PHome'
import Profile from '../pages/PProfile'
import Routines from '../pages/PRoutines'
import Categories from '../pages/PCategories'
import Trainer from '../pages/PAdmin.vue'
import AdminExercises from '../pages/AdminExercises.vue'
import AdminRoutines from '../pages/AdminRoutines.vue'
import PrivacyPolitics from '../pages/PPrivacy.vue'
import AboutUs from '../pages/PAbout.vue'
import Terms from '../pages/PConditions.vue'
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
        path: '/profile',
        name: 'Profile',
        component: Profile
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
        path: '/privacy',
        name: 'PrivacyPolitics',
        component: PrivacyPolitics
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/terms',
        name: 'Terms',
        component: Terms
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