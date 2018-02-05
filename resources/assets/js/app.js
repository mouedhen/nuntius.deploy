import 'babel-polyfill'
import axios from 'axios'

window.axios = axios;

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': Cookies.get('token'),
};

import * as Cookies from 'tiny-cookie'
import Vue from 'vue'

window.Vue = Vue;

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import DataTables from 'vue-data-tables'

Vue.use(ElementUI, { locale });
Vue.use(DataTables);

//@todo add authentication logic

import router from './routes'
import store from './store'
import App from './components/App.vue'

Vue.component('app', App);
const app = new Vue({
    router,
    store
}).$mount('#app');
