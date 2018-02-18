require('./app/boostrap');

import Vue from 'vue'

window.Vue = Vue;

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/fr'
import DataTables from 'vue-data-tables'

Vue.use(ElementUI, { locale });
Vue.use(DataTables);

import store from './store'
import router from './routes'
import App from './components/App.vue'
// import App from './app/views/shared/App'

Vue.component('app', App);
new Vue({
    router,
    store
}).$mount('#app');
