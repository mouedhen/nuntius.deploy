import '@babel/polyfill'
import axios from 'axios'
import Vue from 'vue'

window.axios = axios;
window.Vue = Vue;

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './components/shared/App'
import router from './routes'


Vue.component('app', App);
const app = new Vue({
    router,
}).$mount('#app');
