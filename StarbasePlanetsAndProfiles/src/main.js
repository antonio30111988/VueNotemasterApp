import Vue from 'vue' 
import VueRouter from 'vue-router'

//register to use router for manage paths, connect router with vue
Vue.use(VueRouter)
import App from './App.vue'
import Data from './components/Data.vue'

const routes=[{
	//any data/ path 
	path: '/data/:type',
	component:Data
}]
const router=new VueRouter({
	routes
})

new Vue({
	el: "#app",
	router,
	render: h=>h(App)
})