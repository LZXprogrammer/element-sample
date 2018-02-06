// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from '@/store/store'

// import Qs from 'qs'
//
// var axios_instance = axios.create({
//     baseURL: 'http://axiossample.app',
//     transformRequest: [function (data) {
//         data = Qs.stringify(data)
//         return data
//     }],
//     headers:{ 'Content-Type': 'application/x-www-form-urlencoded' }
// })

Vue.use(ElementUI, { size: 'small' })
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
