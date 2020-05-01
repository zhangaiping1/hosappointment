import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";
import VueCookie from "vue-cookie"
import Vuex from "vuex"
// import env from './env'



const mock = true;
if (mock){
  require('./mock/api')
}
// 接口错误拦截   前两行默认参数根据跨域方式做调整。
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//根据不同的环境请求不同的值。
// axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use((response)=>{
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  }else if (res.status == 10) {
    if(path!='#/index'){
      window.location.href = '/#/login';
    }
  }else {
    alert(res.msg);
    return Promise.reject(res);
  }
})
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  Vuex,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
