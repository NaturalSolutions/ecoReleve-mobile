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
      type: "number",
      value: 4
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
    setState (state, value) {
      state = Object.assign(state, value);
    },
    
  },

  actions: {
    //(prefer fetch again)
    setInitialState ({ commit, rootState }, options) {
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
            commit('setState', _obs)
            resolve()
          }, 1000)
      })
    },

    saveObservation({commit, rootstate}, options){

    }
  }
}
