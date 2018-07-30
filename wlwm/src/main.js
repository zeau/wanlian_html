// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'


import './common/css/base.css'  /*引入公共样式*/
import './common/css/common.css'
import './common/css/goods.css'
import 'element-ui/lib/theme-chalk/index.css'
import './components/tool/toast.css';
import Toast from './components/tool/toast.js';
import ElementUI from 'element-ui'

Vue.use(Toast);
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
