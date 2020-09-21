import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { stringOne, stringTwo } from './task2/file1';
import fileAlert from './task2/file2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

fileAlert(stringOne);
fileAlert(stringTwo);
