import axios from 'axios'

let _protocols = {
  protocols: [
    {
      id: 1,
      name: 'A',
      schema: {}
    },{
      id: 2,
      name: 'D'
    },{
      id: 3,
      name: 'C'
    },
  ],

  currentProtocol: {},
}

export default {

  state: _protocols,

  getters: {
  },

  mutations: {
    setCurrentProtocol (state, payload) {
      state.currentProtocol = payload
    },

    initProtocols (state, payload) {
      state.protocols = payload
      
      //refresh current proto?
      state.currentProtocol = {}
    }
  },

  actions: {
    fetchProtocols({ commit }, options) {
      return erdApi.get('protocols/', {
      })
      .then(function (response) {
        commit('initProtocols', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },

}
