import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Cursos from './views/Cursos.vue';
import Contato from './views/Contato.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: Cursos
    }
  ],
})