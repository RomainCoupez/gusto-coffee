// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyBBiEMMijgP6I2r8fGV3cdtD4DkazxdcR0',
  authDomain: 'gustocoffee-1b9e4.firebaseapp.com',
  databaseURL: 'https://gustocoffee-1b9e4.firebaseio.com',
  projectId: 'gustocoffee-1b9e4',
  storageBucket: 'gustocoffee-1b9e4.appspot.com',
  messagingSenderId: '394565459242',
  appId: '1:394565459242:web:be42691052ee4892'
}

Firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
