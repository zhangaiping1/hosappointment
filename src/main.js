import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from "vue-axios";
import env from './env'

// 接口错误拦截   前两行默认参数根据跨域方式做调整。
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据不同的环境请求不同的值。
// axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use((response)=>{
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    window.location.href = '/#/login';
  }else {
    alert(res.msg);
  }
})
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
