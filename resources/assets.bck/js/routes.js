import VueRouter from 'vue-router'

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

import Dashboard from './components/pages/Dashboard'
import UsersIndex from './components/pages/UsersIndex'
import Login from './components/pages/Login'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Dashboard,
            beforeEnter: authMiddleware
        },
        {
            path: '/users',
            name: 'users:index',
            component: UsersIndex,
            beforeEnter: authMiddleware
        },
        {

            path: '/login',
            name: 'login',
            component: Login,
            // beforeEnter: authMiddleware
        }
    ]
});

export default router;
