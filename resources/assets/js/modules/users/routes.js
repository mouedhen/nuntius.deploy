import authMiddleware from './../../routes/middleware/auth'

import UsersIndex from './users/pages/UsersIndex'
import UsersCreate from './users/pages/UsersCreate'
import UsersList from './users/pages/UsersList'
import UsersDetails from './users/pages/UsersDetails'

export const routes = [
    {
        path: '/dashboard/users',
        name: 'dashboard:users:index',
        component: UsersIndex,
        beforeEnter: authMiddleware,
    },
    {
        path: '/dashboard/users/create',
        name: 'dashboard:users:create',
        component: UsersCreate,
        beforeEnter: authMiddleware,
    },
    {
        path: '/dashboard/users/list',
        name: 'dashboard:users:list',
        component: UsersList,
        beforeEnter: authMiddleware,
    },
    {
        path: '/dashboard/users/:id/details',
        name: 'dashboard:users:details',
        component: UsersDetails,
        beforeEnter: authMiddleware,
    }
];
