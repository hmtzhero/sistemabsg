import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
// import 'buefy/lib/buefy.css'
import 'vuetify/dist/vuetify.min.css'
import router from './router.js'

Vue.use(Vuetify)
Vue.use(VueRouter)


import App from './App.vue'
const app = new Vue({
    el : '#root',
    router,
    render : h => h(App)
})