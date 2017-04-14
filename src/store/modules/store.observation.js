import axios from 'axios'


export default {

  state: {
  },

  getters: {
    
  },

  mutations: {
    setCurrentObservation (state, value) {
      console.log(value);
      state.observation = value
    }
  },

  actions: {

    //prefer fetch again
    setCurrentObservation ({ commit, rootState }, options) {

      let observation = rootState.project.observations.find((obs) => {
        return obs.id === options.id
      })

      commit('setCurrentObservation', observation)
    }
  }
}
