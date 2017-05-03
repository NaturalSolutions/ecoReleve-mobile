import { portalApi } from '../../main.js'

let _profile = {
    id: 1,
    firstName: 'Matheo',
    lastName: 'Jaouen'
}

export default {

  state: {
    profile: _profile
  },

  mutations: {
    setUserProfile (state, value) {
      state.profile = value;
    },
    setCookie (state, value) {
      state.cookie = value;
    }
  },

  actions: {
    userLogin ({ commit }, options) {

      //sha could be done here
      var data= 'userId=' + options.userId + '&password=' + options.password

      return portalApi.post('security/login', data)
      .then(function (response) {
        context.commit('setUserProfile', response);
      })
      .catch(function (error) {
        console.log(error);
      });

    },

    disconnect (){

    }
  }
}
