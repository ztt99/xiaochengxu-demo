import Vue from 'vue'
import App from './App'
import plugin from './api/request'
const request = plugin({
  baseUrl:'https://www.uinav.com/api/public/v1/'
})

Vue.use(request)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
