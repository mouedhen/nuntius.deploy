import VueRouter from 'vue-router'

import Home from './../components/pages/Home'
import Login from './../components/pages/auth/Login'

import {routes as usersRoutes} from './../modules/users/routes'

import {routes as customersRoutes} from '../modules/missions/customers/routes'
import {routes as missionsRoutes} from '../modules/missions/missions/routes'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
            meta: {}
        },
        {
            path: '/login',
            name: 'auth:login',
            component: Login

        },
        ...usersRoutes,
        ...customersRoutes,
        ...missionsRoutes,
    ]
});

export default router;
