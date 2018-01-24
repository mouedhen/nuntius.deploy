import VueRouter from 'vue-router'

import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'

import Authentication from './helpers/Authentication'

function authMiddleware(to, from, next) {
    if (!Authentication.isLoggedIn() && to.fullPath !== '/login') {
        router.push('/login')
    } else if (Authentication.isLoggedIn() && to.fullPath === '/login') {
        router.push(from.path);
    } else {
        next();
    }
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: authMiddleware
        },
        {

            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: authMiddleware
        }
    ]
});

export default router;
