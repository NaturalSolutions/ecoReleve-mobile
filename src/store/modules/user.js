import axios from 'axios'

let _profile = {
    id: 1,
    firstName: 'Matheo',
    lastName: 'Jaouen'
}

export default {

  state: {
    profile: _profile
  },

  getters: {
    username: state => {
      state.username;
    },
  },

  mutations: {
    setUsername (state, value) {
      state.username = value;
    },
    setUserProfile (state, value){
      state.profile = value;
    }
  },

  actions: {
    userLogin ({ commit }, options) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('setUserProfile', _profile)
          resolve()
        }, 1000)
      })
      
      //url -> user
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
