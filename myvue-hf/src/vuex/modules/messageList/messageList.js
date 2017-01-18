import {
  GET_MESSAGE,
  SET_CURRENT_MESSAGE
} from '../../mutation-types.js'

import actions from './messageList-actions.js'

const state = {
  messageList: () => [],
  currentMessage: {}
}

const getters = {
  getMessageList: (state) => {
    return state.messageList
  },
  getCurrentMessage: (state) => {
    return state.currentMessage
  }
}

const mutations = {
  [GET_MESSAGE] (state, data) {
    state.messageList = data
  },
  [SET_CURRENT_MESSAGE] (state, message) {
    state.currentMessage = message
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
