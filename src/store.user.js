export default {
  state: {
    profile: {}
  },
  getters: {
    userNames: function(state) {
      return state.profile.firstName + ' ' + state.profile.lastName;
    },
    userProfile: function(state) {
      return state.profile;
    }
  },
  mutations: {
    userSetProfile: function(state, profile) {
      state.profile = profile;
    }
  },
  actions: {
    userLogin: function(context, options) {
      setTimeout(function() {
        context.commit('userSetProfile', {
          firstName: options.firstName,
          lastName: options.lastName
        });
      }, 100);
    }
  }
}
