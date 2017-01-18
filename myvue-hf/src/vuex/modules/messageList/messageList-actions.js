import * as types from '../../mutation-types.js'

const actions = {
  getMessageList: ({commit}, data) => {
    commit(types.GET_MESSAGE, data)
  },
  setCurrentMessage: ({commit}, data) => {
    commit(types.SET_CURRENT_MESSAGE, data)
  },
  getCurrentMessage: ({commit}) => {
    commit(types.GET_CURRENT_MESSAGE)
  }
}

export default actions
