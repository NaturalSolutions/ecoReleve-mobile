import axios from 'axios'
import Vue from 'vue'

var formParameters = [ 
  { id: 1, label: 'First label', type: 'input', answer: 'Antoine' },
  { id: 2, label: 'Last Name', type: 'input' },
  { id: 3, label: 'Email', type: 'input'},
  { id: 4, label: 'Job', type: 'select', options: ['...', 'Developer', 'Ops', 'Project Manager'], answer: 'Developer' },
  { id: 5, label: 'Gender', type: 'radio', options: ['Male', 'Female'], answer: 'Male'},
  { id: 6, label: 'Address', type: 'textarea', placeholder: 'Your zip code and city'}
];


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
