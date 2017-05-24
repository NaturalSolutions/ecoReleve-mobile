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
      //launch xhr here (mutate the store on success)
    }
  }
}
