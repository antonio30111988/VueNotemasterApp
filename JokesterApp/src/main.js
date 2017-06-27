import Vue from 'vue'
import App from './App.vue'

import store from './store'
//store.commit('INIT_JOKES',[{'TEST':'testing app'},{'test2':'tesitn app 2'}])

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
