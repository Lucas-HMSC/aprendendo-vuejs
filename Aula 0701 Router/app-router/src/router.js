import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

import Acoes from './views/Acoes.vue';
import AcoesDados from './views/AcoesDados.vue';

const Cursos = () => import('./views/Cursos.vue');
const Curso = () => import(/* webpackChunkName: "curso" */ './views/Curso.vue');
const CursoAulas = () => import(/* webpackChunkName: "curso" */ './views/CursoAulas.vue');
const CursoDescricao = () => import(/* webpackChunkName: "curso" */ './views/CursoDescricao.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        sidebar: Acoes,
      }
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/acoes',
      components: {
        default: Acoes,
        sidebar: Home,
      },
      children: [
        {
          path: ':simbolo',
          component: AcoesDados,
          props: true,
        }
      ],
    },
    {
      path: '/cursos',
      component: Cursos,
      props: true,
      // beforeEnter: (to, from, next) => {
      //   console.log('Foi para cursos.');
      //   next();
      // },
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
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    }
    // return window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
  },
});