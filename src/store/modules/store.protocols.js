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
        // {
        //   name: "select",
        //   label: "field 2",
        //   type: "select",
        //   options: [
        //     {
        //       value: 'female',
        //       label: 'female'
        //     },
        //     {
        //       value: 'male',
        //       label: 'male'
        //     }
        //   ]
        // }
      ],
      required: [
        // {
        //   name: "field_3",
        //   label: "field 3",
        //   type: "text",
        // }
      ],
      optional: [
        // {
        //   name: 'field_4',
        //   label: "field 4",
        //   type: "text",
        // }
      ],
    },{
      id: 2,
      name: 'D'
    },{
      id: 3,
      name: 'C'
    },
  ],
  current: {}
}

export default {

  state: _protocols,

  getters: {

  },

  mutations: {
    setCurrentProtocol (state, payload) {
      let proto = state.protocols.find((protocol) => {
        return protocol.id === parseInt(payload)
      });
      state.current = proto
    },

    initProtocols (state, payload) {
      state.protocols = payload      
      //refresh current proto?
      state.current = {}
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
