// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { store } from './store'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#5E81AC',
    secondary: '#D8DEE9',
    accent: '#B48EAD',
    info: '#88C0D0',
    success: '#A3BE8C',
    warning: '#EBCB8B',
    error: '#BF616A'
  }
})

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
