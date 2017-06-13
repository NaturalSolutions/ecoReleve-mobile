import axios from 'axios'

let _project = {
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
