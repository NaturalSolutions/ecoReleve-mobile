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

  state: _project,

  getters: {
  },

  mutations: {
    setProject (state, value) {
      state = value;
    },
  },

  actions: {
    //url -> projects/:id
    fetchProject ({ commit }, options) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('setProjects', _projet)
          resolve()
        }, 1000)
      })
    }
  }
}
