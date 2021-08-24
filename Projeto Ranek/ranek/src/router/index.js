import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Produto from '../views/Produto.vue';
import Usuario from '../views/usuario/Usuario.vue';
import UsuarioProdutos from '../views/usuario/UsuarioProdutos.vue';
import UsuarioEditar from '../views/usuario/UsuarioEditar.vue';
import UsuarioVendas from '../views/usuario/UsuarioVendas.vue';
import UsuarioCompras from '../views/usuario/UsuarioCompras.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produto/:id',
    name: 'Produto',
    component: Produto,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/usuario',
    component: Usuario,
    meta: {
      login: true,
    },
    children: [
      {
        path: '',
        name: 'Usuario',
        component: UsuarioProdutos,
      },
      {
        path: 'compras',
        name: 'Compras',
        component: UsuarioCompras,
      },
      {
        path: 'vendas',
        name: 'Vendas',
        component: UsuarioVendas,
      },
      {
        path: 'editar',
        name: 'Usuario-Editar',
        component: UsuarioEditar,
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token) next('/login');
    else next();
  } else next();
});

export default router;
