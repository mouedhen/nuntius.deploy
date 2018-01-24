import '@babel/polyfill'
import axios from 'axios'
import Vue from 'vue'

window.axios = axios;
window.Vue = Vue;

import * as Cookies from 'tiny-cookie'

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': Cookies.get('token'),
};

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './components/shared/App'
import router from './routes'

Vue.component('app', App);
const app = new Vue({
    router,
}).$mount('#app');
