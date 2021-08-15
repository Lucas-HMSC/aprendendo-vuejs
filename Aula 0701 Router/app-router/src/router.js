import Vue from 'vue';
import Router from 'vue-router';

import Cursos from './views/Cursos.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: 'app',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cursos',
      component: Cursos,
    }
  ],
});