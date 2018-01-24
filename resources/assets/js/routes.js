import VueRouter from 'vue-router'

import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
        },
        {

            path: '/login',
            name: 'login',
            component: Login,
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.fullPath !== '/login') {
        axios.get('/api/v1/profile').then(response => {
            next();
        }).catch(error => {
            router.push('/login')
        })
    } else {
        next();
    }
})

export default router;
