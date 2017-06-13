import axios from 'axios'
import Vue from 'vue'


let _obs = {
  field_2: 4,
  protocolId: 1
}

export default {

  state: {},

  getters: {
    
  },

  mutations: {
    setCurrentObservation (state, payload) {
      state.current = payload;
    },

    updateValue (state, payload) {
      state.current.values[payload.key] = payload.value;
    },

    finishCurrentObservation (state, payload) {
      state.current.finished = true;
    },

    unfinishCurrentObservation (state, payload) {
      state.current.finished = false;
    },

  },

  actions: {
    
    setCurrentObservation ({ commit, rootState }, options) {

      let observation;

      if(rootState.projects.current.observations) {
        observation = rootState.projects.current.observations.find((observation) => {
          return observation.timestamp === parseInt(options.timestamp)
        });
      } else {
        rootState.projects.current.observations = []
      }

      if(!observation){
        observation = { 
          timestamp : parseInt(options.timestamp),
          protocolId: rootState.protocols.current.id,
          values: {}
        }
        rootState.projects.current.observations.push(observation)
      }

      commit('setCurrentProtocol', observation.protocolId)
      commit('setCurrentObservation', observation)
    },


  }
}
