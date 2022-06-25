import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

Vue.use(VueAxios, axios)
Vue.use(VueCookies, { expire: ''})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#CISOffers')
