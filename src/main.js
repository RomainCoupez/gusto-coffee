// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { firestorePlugin } from "vuefire";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "./styles/app.scss";


Vue.use(BootstrapVue);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
