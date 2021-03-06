// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import Mint from 'mint-ui'
import './assets/style/index.styl'
import 'font-awesome/css/font-awesome.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/style/border.css'
import './assets/style/reset.styl'
import './assets/style/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
