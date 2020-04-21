import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueAxios)
Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
