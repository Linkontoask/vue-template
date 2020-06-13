import { SET_ROUTER_MODE } from '../types'

export const mutations = {
  [SET_ROUTER_MODE](state, mode) {
    state.routerMode = mode
  }
}
