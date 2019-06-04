import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
// let LazyloaderExemple = ()=> import('./components/NotFound') If i need to lazyload a component

export default {
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    }
  ]
};
