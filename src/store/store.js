import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import createLogger from '../../../src/plugins/logger'
import user from './modules/user'
import projects from './modules/store.projects'
import project from './modules/store.project'
import observation from './modules/store.observation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
  	user,
  	projects,
  	project,
  	observation
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
