import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Authenticate from '@/views/Authenticate'
// import HelloWorld from '@/components/HelloWorld'
import Category from '@/components/Category'
import Concept from '@/views/Concept'
import PrivateOffice from '@/views/PrivateOffice'
import About from '@/views/About'
import News from '@/views/News'
import Booking from '@/components/Booking'
import Loggia from '@/components/booking/a-partager/Loggia'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/about-us",
      name: "About",
      component: About
    },
    {
      path: "/concept",
      name: "Concept",
      component: Concept
    },
    {
      path: "/news",
      name: "News",
      component: News
    },
    {
      path: "/booking",
      name: "Booking",
      component: Booking
    },
    {
      path: "/log",
      name: "Authenticate",
      component: Authenticate
    },
    {
      path: "/booking/a-partager/loggia",
      name: "Loggia",
      component: Loggia
    },
    {
      path: "/register",
      name: "Authenticate",
      component: Authenticate
    },
    {
      path: "/category",
      name: "Category",
      component: Category,
      meta: {
        requiresAuth: true
      },
      beforeEach: (to, from, next) => {}
    }
  ]
});
