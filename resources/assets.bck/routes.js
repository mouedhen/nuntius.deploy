import VueRouter from 'vue-router'

import Home from './components/pages/Home.vue'

import {routes as customersRoutes} from './modules/missions/customers/routes'
import {routes as missionsRoutes} from './modules/missions/missions/routes'

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...customersRoutes,
        ...missionsRoutes,
        {
            path: '/',
            name: 'index',
            component: Home,
            meta: {}
        },
        {
            path: '/locations',
            name: 'locations:index',
            component: Home,
            meta: {}
        },
    ]
});



export default router;
