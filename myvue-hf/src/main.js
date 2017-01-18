// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import sysRouterConfig from './routes'
import store from './vuex/store'

import 'uikit/dist/css/uikit.css'
import 'jquery'
import 'zrender'
import 'uikit/dist/css/components/autocomplete.css'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/js/components/autocomplete.js'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: sysRouterConfig
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')

