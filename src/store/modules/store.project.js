import axios from 'axios'

let _project = {
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
  observations: [
    {
      id: 1,
      name: 'observation name'
    },
    {
      id: 2,
      name: 'observation name'
    }
  ], 
}


export default {

  state: _project,

  getters: {
    //filter by project
    stations: state => {
      return state.stations
    },
    
    observations: state => {
      return state.observations
    },
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
