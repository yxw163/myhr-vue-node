import Vue from 'vue'
import Vuex from 'vuex'
import messageList from './modules/messageList/messageList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messageList
  }
})
