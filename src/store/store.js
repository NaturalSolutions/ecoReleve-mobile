import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'

import user from './modules/user'
import projects from './modules/store.projects'
import observation from './modules/store.observation'
import protocols from './modules/store.protocols'
import stations from './modules/store.stations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
  	user,
  	projects,
  	observation,
    protocols,
    stations
  },
  // strict: true,

})
