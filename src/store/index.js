import Vue from 'vue'
import Vuex from 'vuex'
import { async } from 'q';

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  //相当于计算属性
  getters,
  //同步操作
  mutations,
  //异步操作  类似vue 的methods
  actions
})
