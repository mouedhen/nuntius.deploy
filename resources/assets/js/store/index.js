import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth'
import users from './modules/users/users'

import customers from './modules/missions/customers'
import contacts from './modules/missions/contacts'
import conductors from './modules/missions/conductors'

import missions from './modules/missions/missions'
import tasks from './modules/missions/tasks'

export default new Vuex.Store({
    modules: {
        auth,
        users,

        customers,
        contacts,
        conductors,

        missions,
        tasks,
    },
    strict: true
})
