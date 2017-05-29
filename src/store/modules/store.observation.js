import axios from 'axios'
import Vue from 'vue'


let _obs = {
  id: 1,
  name: 'observation name',
  trace: [
    {
      label: "field 1",
      type: "text",
      value: "du texte"
    },        {
      label: "field 2",
      type: "number",
    }
  ],
  required: [
    {
      label: "field 1",
      type: "number",
      value: "du texte"
    }
  ],
  optional: [
    {
      label: "field 1",
      type: "text",
      value: "du texte"
    }
  ],


  currentObservation: {

  }
};

export default {

  state: {},

  getters: {
    
  },

  mutations: {
    scopeCurrentObservation (state, payload) {
      state.currentObservation = payload;
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
      }

      commit('scopeCurrentObservation', observation)
    },
  }
}
