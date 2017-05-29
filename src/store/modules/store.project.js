import axios from 'axios'

let _project = {
  currentProject: {
    observations: [
      {
        id: 1,
        name: 'AJGKDJGIVJ',
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
}

export default {

  state: _project,

  getters: {
  },

  mutations: {
    scopeCurrentProject (state, payload) {
      state.currentProject = payload;
    },

  },

  actions: {
    scopeCurrentProject ({ state, commit, rootState }, options) {
      let project = rootState.projects.projects.find((project) => {
        return project.ID === parseInt(options.id)
      });
      commit('scopeCurrentProject', project)
    },

  },

}
