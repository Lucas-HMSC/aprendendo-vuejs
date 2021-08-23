import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PaginaCarregando from '@/components/PaginaCarregando.vue';

Vue.config.productionTip = false

Vue.component('PaginaCarregando', PaginaCarregando);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
