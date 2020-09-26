import Vue from 'vue'
import App from './App.vue'
import store from './store'

// https://nil.github.io/v-drag/installation/
import vdrag from 'v-drag'

Vue.use(vdrag)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
