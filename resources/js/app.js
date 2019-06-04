import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// import BootstrapVue from 'bootstrap-vue's

// Vue.use(BootstrapVue)
Vue.use(VueRouter)

let app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
