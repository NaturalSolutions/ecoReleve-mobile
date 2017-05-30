import axios from 'axios'
import Vue from 'vue'


let _obs = {
    field_2: 4,
};

export default {

  state: {},

  getters: {
    
  },

  mutations: {
    scopeCurrentObservation (state, payload) {
      state.currentObservation = payload;
    },

    updateValue (state, payload) {

      state.currentObservation[payload.key] = payload.value;
    },
    
  },

  actions: {
    //(prefer fetch again)
    scopeCurrentObservation ({ commit, rootState }, options) {
      if(!rootState.projects.currentProject){
        commit('scopeCurrentProject', rootState.projects.projects[0])
      }

      let observation = rootState.project.currentProject.observations.find((observation) => {
        return observation.timestamp === parseInt(options.timestamp)
      });

      if(!observation){
        observation = { timestamp : parseInt(options.timestamp) }
        rootState.project.currentProject.observations.push(observation)
      }

      commit('scopeCurrentObservation', observation)
    },
  }
}
