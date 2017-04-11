export default {
  state: {
    username: 'Matheo',
  },
  getters: {
    username: function(state) {
      return state.username;
    },
  },

  mutations: {
    setUserName: function(state, value) {
      state.username = value;
    },
    setUserProfile: function(state, value){
      console.log(value);
    }
  },

  actions: {
    userLogin: function(context, options) {
      setTimeout(function() {
        
        context.commit('setUserProfile', {
          firstName: options.firstName,
          lastName: options.lastName
        });
      }, 100);
    }
  }
}
