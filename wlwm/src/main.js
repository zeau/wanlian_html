// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/base.css'  /*引入公共样式*/
import './common/css/common.css'
import './common/css/goods.css'

import './components/tool/toast.css';
import Toast from './components/tool/toast.js';
Vue.use(Toast);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
