import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'simple-layout',
    appTitle: 'MSIS'
  },
  mutations: {
    SET_LAYOUT (state, payload) {
      state.layout = payload
    }
  },
  actions: {},
  getters: {
    layout (state) {
      return state.layout
    }
  }
})
