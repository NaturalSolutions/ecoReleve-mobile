import axios from 'axios'

export default {

  state: {
    username: 'Matheo',
    profile: {},
    status: 'offline'
  },




  getters: {
    username: function(state) {
      return state.username;
    },
  },



  mutations: {
    setUsername: function(state, value) {
      state.username = value;
    },
    setUserProfile: function(state, value){
      state.profile = value;     
    }
  },



  actions: {
    userLogin ({ commit }, options) {
      console.log(options);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('setUserProfile', {
            test: 'test'
          })
          resolve()

        }, 1000)
      })

/*    return axios.get('/user', {
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
