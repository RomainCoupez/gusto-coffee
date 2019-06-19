import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Authenticate from '@/views/Authenticate.vue'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/components/Category'

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
      name: 'Home',
      component: Home
    },
    {
      path: '/authenticate',
      name: 'Authenticate',
      component: Authenticate
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        requiresAuth: true
      },
      beforeEach: (to, from, next) => {
      }
    }
  ]
})
