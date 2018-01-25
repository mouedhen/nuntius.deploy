import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import customers from './modules/missions/customers'
import missions from './modules/missions/missions'
import tasks from './modules/missions/tasks'

export default new Vuex.Store({
    modules: {
        customers,
        missions,
        tasks,
    },
    strict: true
})
