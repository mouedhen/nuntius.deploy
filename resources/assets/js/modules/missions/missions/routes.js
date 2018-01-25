import MissionsDashboard from './pages/MissionsDashboard.vue'
import MissionsCreate from './pages/MissionsCreate.vue'
import MissionsList from './pages/MissionsList.vue'
import MissionsDetails from './pages/MissionsDetails.vue'
import MissionsTasks from './pages/MissionsTasks.vue'

export const routes = [
    {
        path: '/missions/dashboard',
        name: 'missions:index',
        component: MissionsDashboard,
        meta: {}
    },
    {
        path: '/missions/create',
        name: 'missions:create',
        component: MissionsCreate,
        meta: {}
    },
    {
        path: '/missions/list',
        name: 'missions:list',
        component: MissionsList,
        meta: {}
    },
    {
        path: '/missions/:id/details',
        name: 'missions:details',
        component: MissionsDetails,
        meta: {}
    },
    {
        path: '/missions/:id/tasks',
        name: 'missions:tasks',
        component: MissionsTasks,
        meta: {}
    }
];
