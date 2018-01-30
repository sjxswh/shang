// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont1.css'
import './assets/iconfont/iconfont2.css'
import axios from 'axios'
import store from './store/TodoStore'
import { Indicator, MessageBox } from 'mint-ui'
//axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(Mint)





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
