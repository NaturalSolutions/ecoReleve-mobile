import { erdApi } from '../../main.js'

let _projects = [
  {
    ID: 1,
    Name: 'first',
    imported: true,
    observations: [],
    status: 'sync'
  },{
    ID: 2,
    Name: 'second',
    imported: true,
    observations: [],
    status: 'edited'
  },{
    ID: 3,
    Name: 'third',
    imported: false,
    observations: [],
    status: 'sync',
  },  {
    ID: 4,
    Name: 'fourth',
    imported: true,
    observations: [],
    status: 'sync'
  },{
    ID: 5,
    Name: 'fifth',
    imported: true,
    observations: [],
    status: 'edited'
  },{
    ID: 6,
    Name: 'sixth',
    imported: true,
    observations: [],
    status: 'sync',
  },
]

export default {

  state: {
    projects: _projects,
  },

  getters: {
    myProjects: (state, getters, rootState ) => {
      return state.projects.filter(project => (project.imported))
    },
  },

  mutations: {

    setProjects (state, payload) {
      state.projects = payload
    },

    addProject (state, payload) {
      state.projects.push(payload);
    },

    //imported, draft
    setProject(state, payload) {
      let project = state.projects.find((project) => {
        return project.ID === payload.ID
      });

      //project.properties = payload
      project.imported = true
      project.status = 'sync'
    },

    setUnderSync(state, payload) {
      let project = state.projects.find((project) => {
        return project.ID === payload.ID
      });

      project.status = 'undersync'
    },
    
    setSync(state, payload) {
      let project = state.projects.find((project) => {
        return project.ID === payload.ID
      });
      project.status = 'sync'
    },
    
    //remove obs & props in local in local, keep it in projects and change imported
    removeProject(state, payload) {
      let project = state.projects.find((project) => {
        return project.ID === payload.ID
      })
      
      delete project.properties
      delete project.observations
      project.imported = false
    },
    
  },

  actions: {
    fetchProjects ({ commit }, options) {

      return erdApi.get('projects/?criteria=%5B%5D&page=1&per_page=200&offset=0&order_by=%5B%5D&typeObj=1', {

      })
      .then(function (response) {
        //commit('setProjects', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    //import map tiles etc (not obs)
    importProject({ commit }, options) {
      commit('setProject', options)
      return;

      return erdApi.get('projects/' + options.ID, {
        
      })
      .then(function (response) {
        commit('setProject', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    //import map tiles etc (not obs)
    synchronizeProject({ commit }, options) {

      //update status to under sync (commit)
      commit('setUnderSync', options)

      setTimeout(() => {
        commit('setSync', options)
      }, 1000)
      return;

      return erdApi.post('projects/' + options.ID, {
        
      })
      .then(function (response) {
        commit('setSync', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    },

  }
}
