// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont1.css'
import axios from 'axios'
import store from './store/TodoStore'

//axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(Mint)


/*axios.interceptors.request.use(function(config) {
	let token=document.cookie.split("=")[1];
   if (token) {
     config.headers.Authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE0LCJleHAiOjE1MzI2NzgzNjMzNDAsImZpcnN0bmFtZSI6ImNob25nIiwiaWRUZXh0IjoiaXl0ZzNhIn0.EEtVd4azcMfbZKEYD3KO3Wi60v7ZxPTM28W_lMU2XFU";
     console.log(config.headers.Authorization)// 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
   }   
   return config;  
}, function(error) {
	// 在发出错误请求之前做点事
	return Promise.reject(error);
});*/




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
