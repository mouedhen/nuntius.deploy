import VueRouter from 'vue-router'
import {guest} from './middleware/auth'

import Loader from '../views/shared/components/Loader'

const LogIn = () => ({
    // The component to load. Should be a Promise
    component: import('../views/auth/LogIn'),
    // A component to use while the async component is loading
    loading: Loader,
    // A component to use if the load fails
    // error: ErrorComp,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000
});

const Home = () => ({
    // The component to load. Should be a Promise
    component: import('../views/base/Home'),
    // A component to use while the async component is loading
    loading: Loader,
    // A component to use if the load fails
    // error: ErrorComp,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000
});

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
        },
        {
            path: '/login',
            name: 'auth:login',
            component: LogIn,
            // beforeEnter: guest
        },
    ]
});

export default router;
