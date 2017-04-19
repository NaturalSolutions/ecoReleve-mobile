import axios from 'axios'
import Vue from 'vue'


let _obs = {
  id: 1,
  name: 'observation name',
  trace: [
    {
      name: "field 1",
      type: "text",
      value: "du texte"
    },        {
      name: "field 2",
      type: "text",
      value: "du texte"
    }
  ],
  required: [
    {
      name: "field 1",
      type: "text",
      value: "du texte"
    }
  ],
  optional: [
    {
      name: "field 1",
      type: "text",
      value: "du texte"
    }
  ],
};

export default {

  state: {},

  getters: {
    
  },

  mutations: {
    setInitialState (state, value) {
      state = Object.assign(state, value);
    }
  },

  actions: {

    //prefer fetch again
    setInitialState ({ commit, rootState }, options) {
      commit('setInitialState', _obs)
    }
  }
}
