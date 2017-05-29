import axios from 'axios'

let _project = {
  observations: [
    {
      id: 1,
      name: 'observation name',
    },
  ], 
  stations: [
    {
      id: 1,
      name: 'station name',
    },
    {
      id: 2,
      name: 'station name',
    }
  ],
}

export default {

  state: {},

  getters: {
  },

  mutations: {
    setInitialState (state, payload) {
      console.log(payload);
      state = Object.assign(state, payload);
    },

    changeName (state , payload) {
      state.Name = payload
    }
  },

  actions: {
    setInitialState ({ state, commit, rootState }) {
      console.log(rootState);
      commit('setInitialState', rootState.projects.currentProject)
    }
  }

}
