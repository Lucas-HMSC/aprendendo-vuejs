import Vue from 'vue';
import Router from 'vue-router';

import CursoDescricao from './views/CursoDescricao.vue';
import CursoAulas from './views/CursoAulas.vue';
import Cursos from './views/Cursos.vue';
import Curso from './views/Curso.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cursos',
      component: Cursos,
      props: true,
      children: [
        {
          name: 'curso',
          path: ':curso',
          component: Curso,
          props: true,
          children: [
            {
              name: 'aulas',
              path: 'aulas',
              component: CursoAulas,
            },
            {
              name: 'descricao',
              path: 'descricao', 
              component: CursoDescricao,
            }
          ],
        }
      ],
    },
  ],
});