import Vue from 'vue';
import App from '../demo/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#carouselDemo');
