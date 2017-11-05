import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  growth: ''
}

const mutations = {
  mangoGrow (state, payload) {
    state.growth = payload
  }
}

const actions = {
  start ({ commit }, user) {
    http.get('/start', user)
    .then(({ data }) => {
      commit('mangoGrow', data)
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
