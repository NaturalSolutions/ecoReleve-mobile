import { erdApi } from '../../main.js'


let _projects = [
  {
    id: 1,
    name: 'first',
    creator: 1²
  }, 
  {
    id: 2,
    name: 'second',
    creator: 2
  }
]


export default {

  state: {
    projects: [

    ],
    currentProject: 0
  },

  getters: {
    //filter by project
    myProjects: (state, getters, rootState ) => {
      return state.projects.filter(project => (project.creator == 1))
    },

  },

  mutations: {
    setProjects (state, value) {
      state.projects = value
    },

    addProject (state, value) {
      state.projects.push(value);
    },

    deleteProject (state, value) {
      
    },

    setCurrentProject (state, value) {
      state.currentProject = value
    }
  },

  actions: {
    //will certainly be saveProject
    addProject ({ commit }, options) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('addProject',
              {
                ID: 4,
                Name: 'new project'
              },
          )
          resolve()
        }, 1000)
      })
    },

    //url -> projects
    fetchProjects ({ commit }, options) {

      return erdApi.get('projects/?criteria=%5B%5D&page=1&per_page=200&offset=0&order_by=%5B%5D&typeObj=1', {

      })
      .then(function (response) {
        console.log(response);
        console.log(response.data[1]);
        commit('setProjects', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
