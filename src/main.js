import Vue from 'vue'
import App from './App.vue'
/**ROUTER */
import router from './router'
/**VUEX */
import store from './store'
/**STYLE */
import '@/assets/styles/tailwind.css';
require('@/assets/styles/styles.css');

import axios from 'axios';

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
