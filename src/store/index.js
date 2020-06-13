import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, getter, actions } from './src'

Vue.use(Vuex)

const state = {
  routerMode: 'page-go'
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getter,
  mutations,
  actions
})

export default store
