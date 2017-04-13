import axios from 'axios'


export default {

  state: {
  },

  getters: {
    
    getTrace: (state) => {
      return state.observation.trace
    },

  },

  mutations: {
    setCurrentObservation (state, value) {
      state.observation = value
    }
  },

  actions: {
    setCurrentObservation ({ commit, rootState }, options) {

      let observation = rootState.project.observations.find((obs) => {
        return obs.id === options.id
      })

      commit('setCurrentObservation', observation)
    }
  }
}
