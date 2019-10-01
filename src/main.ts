import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

/* Workaround for an strange bug in vuetify which keeps in focus items */
Vue.directive('blur', {
  inserted(el) {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    el.onfocus = ev => ev.target!.blur();
  },
});

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
