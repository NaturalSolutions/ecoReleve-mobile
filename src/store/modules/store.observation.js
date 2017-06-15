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

    updateValue (state, payload) {
      state.current.values[payload.key] = payload.value;
    },

    setCurrentObsStatus (state, payload) {
      state.current.status = payload;
    },

    setCoordinates (state, payload) {
      state.current.values.latitude = payload.lat;
      state.current.values.longitude = payload.lng;
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
          values: { latitude: '', longitude: '' } //vuex needs references to data-bind it via v-model
        }
        rootState.projects.current.observations.push(observation)
      }

      commit('setCurrentProtocol', observation.protocolId)
      commit('setCurrentObservation', observation)
    },

  }
}
