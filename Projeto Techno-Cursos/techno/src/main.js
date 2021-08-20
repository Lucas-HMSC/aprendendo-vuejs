import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

import PageLoading from './components/PageLoading';

Vue.config.productionTip = false;

Vue.component('PageLoading', PageLoading);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
