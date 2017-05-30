import axios from 'axios'

let _protocols = {
  protocols: [
    {
      id: 1,
      name: 'A',
      trace: [
        {
          name: "field_1",
          label: "field 1",
          type: "text",
        },
        {
          name: "field_2",
          label: "field 2",
          type: "number",
        }
      ],
      required: [
        {
          name: "field_3",
          label: "field 1",
          type: "number",
        }
      ],
      optional: [
        {
          name: 'field_4',
          label: "field 1",
          type: "text",
        }
      ],
    },{
      id: 2,
      name: 'D'
    },{
      id: 3,
      name: 'C'
    },
  ],

  currentProtocol: {
    id: 1,
    name: 'observation name',
    trace: [
      {
        name: "field_1",
        label: "field 1",
        type: "text",
      },
      {
        name: "field_2",
        label: "field 2",
        type: "number",
      }
    ],
    required: [
      {
        name: "field_3",
        label: "field 1",
        type: "number",
      }
    ],
    optional: [
      {
        name: 'field_4',
        label: "field 1",
        type: "text",
      }
    ],

  },
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
