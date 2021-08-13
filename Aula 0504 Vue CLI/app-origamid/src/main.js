import Vue from 'vue';
import App from './App.vue';

import HeaderPrincipal from './components/HeaderPrincipal.vue';

Vue.component('HeaderPrincipal', HeaderPrincipal);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
