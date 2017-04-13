import axios from 'axios'

let _projects = [
  {
    id: 1,
    name: 'first',
    creator: 1
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
      console.log(value);
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
                id: 4,
                name: 'ploouuuuf'
              },
          )
          resolve()
        }, 1000)
      })
    },

    //url -> projects
    fetchProjects ({ commit }, options) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('setProjects', _projects)
          resolve()
        }, 1000)
      })

      /*    
        return axios.get('/user', {
          params: {
            username: options.username,
            password: options.password //(need sha)
          }
        })
        .then(function (response) {
          context.commit('setUserProfile', response);
        })
        .catch(function (error) {
          console.log(error);
        });
      */
    }
  }
}
