import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HelloWorld from '@/components/HelloWorld'
import Authenticate from '@/views/Authenticate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: Authenticate
    }
  ]
})
