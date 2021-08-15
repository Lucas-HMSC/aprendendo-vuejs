import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   console.log('beforeEach-to: ', to);
//   console.log('beforeEach-from: ', from);
//   next();
// });

// router.afterEach((to, from) => {
//   console.log('afterEach-to: ', to);
//   console.log('afterEach-from: ', from);
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
