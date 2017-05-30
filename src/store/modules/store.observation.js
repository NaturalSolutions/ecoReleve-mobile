import axios from 'axios'
import Vue from 'vue'


let _obs = {
  field_2: 4,
}

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

    finishCurrentObservation (state, payload) {
      state.currentObservation.finished = true;
    },

    unfinishCurrentObservation (state, payload) {
      state.currentObservation.finished = false;
    },

  },

  actions: {
    
    //weird & mutable, cf strict mode
    scopeCurrentObservation ({ commit, rootState }, options) {

      if(!rootState.project.currentProject){
        commit('scopeCurrentProject', rootState.projects.projects[0])
      }
      
      let observation;

      if(rootState.project.currentProject.observations) {
        observation = rootState.project.currentProject.observations.find((observation) => {
          return observation.timestamp === parseInt(options.timestamp)
        });
      } else {
        rootState.project.currentProject.observations = []
      }

      if(!observation){
        observation = { timestamp : parseInt(options.timestamp) }
        rootState.project.currentProject.observations.push(observation)
      }

      commit('scopeCurrentObservation', observation)
      commit('unfinishCurrentObservation')
    },
  }
}
