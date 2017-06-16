import axios from 'axios'
import Vue from 'vue'


export default {

  state: {},

  getters: {
  },

  mutations: {
    setCurrentObservation (state, payload) {
      state.current = payload;
    },

    updateObservationValue (state, payload) {
      state.current.values[payload.key] = payload.value;
    },

    setCurrentObservationStatus (state, payload) {
      state.current.status = payload;
    },

    setStationId (state, payload) {
      state.current.stationId = payload
    }
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
