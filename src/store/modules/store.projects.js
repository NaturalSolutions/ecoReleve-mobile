import { erdApi } from '../../main.js'


let _projects = [
  {
    ID: 1,
    Name: 'first',
    mine: true,
    observations: [],
    status: ''
  },{
    ID: 2,
    Name: 'second',
    mine: true,
    observations: [],
    status: ''
  },{
    ID: 3,
    Name: 'third',
    mine: false,
    observations: [],
    status: '',
  },

]


export default {

  state: {
    projects: _projects,
    currentProject: 0,

  },

  getters: {
    //filter by project
    myProjects: (state, getters, rootState ) => {
      return state.projects.filter(project => (project.mine))
    },

    allProjects: (state, getters, rootState) => {
      return state.projects.filter(project => (project.mine === false))
    }
  },



  mutations: {
    setProjects (state, payload) {
      state.projects = payload
    },

    addProject (state, payload) {
      state.projects.push(payload);
    },


    setCurrentProject (state, payload) {
      state.currentProject = payload
    },


    toggleImportedProject(state, payload) {
      let projects = payload;
      let project;

      for (var i = 0; i < projects.length; i++) {

        project = state.projects.find((project) => {
          return project.ID === projects[i].ID;
        });

        //console.log(!undefined);

        project.mine = !project.mine;

      }
    },
  },

  actions: {

    //url -> projects
    fetchProjects ({ commit }, options) {

      return erdApi.get('projects/?criteria=%5B%5D&page=1&per_page=200&offset=0&order_by=%5B%5D&typeObj=1', {

      })
      .then(function (response) {
        //commit('setProjects', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
