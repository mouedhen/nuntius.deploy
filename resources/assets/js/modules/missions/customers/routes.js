import CustomersDashboard from './pages/CustomersDashboard.vue'
import CustomersCreate from './pages/CustomersCreate.vue'
import CustomersList from './pages/CustomersList.vue'
import CustomersDetails from './pages/CustomersDetails.vue'

export const routes = [
    {
        path: '/customers/dashboard',
        name: 'customers:index',
        component: CustomersDashboard,
        meta: {}
    },
    {
        path: '/customers/create',
        name: 'customers:create',
        component: CustomersCreate,
        meta: {}
    },
    {
        path: '/customers/list',
        name: 'customers:list',
        component: CustomersList,
        meta: {}
    },
    {
        path: '/customers/:id/details',
        name: 'customers:details',
        component: CustomersDetails,
        meta: {}
    }
]