import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import '../public/MUI/css/mui.css'
//import '../public/MUI/js/mui.js'

// 引入全部mint-ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
//引入swiper  css模块
import 'swiper/dist/css/swiper.css';


//Vue.prototype.$ajax = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
