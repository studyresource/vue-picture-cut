import Vue from 'vue';
import App from './App.vue';
import VuePictureCut from './lib';

Vue.config.productionTip = false;

Vue.use(VuePictureCut);

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
