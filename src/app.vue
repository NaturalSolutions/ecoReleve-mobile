<template>
  <!-- App -->
  <div id="app" class="framework7-root">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through>
        <f7-navbar v-if="$theme.ios" title="Left Panel"></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar :title="profile.firstName + ' ' + profile.lastName"></f7-navbar>
            <f7-list>
              <f7-list-item link="#" title="Projects"></f7-list-item>
              <f7-list-item link="#" title="Projects"></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>


    <!-- Main Views -->
    <f7-views>

      <f7-view navbar-through main>
        <!-- Pages -->
        <f7-pages>
          <f7-page class="login-page">
          
          <div class="logo"></div>

          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input v-model="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input v-model="password" name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>

          <f7-toolbar bottom>
              <f7-button class="full-width" fill v-on:click="login" title="Sign In">Sign in</f7-button>
          </f7-toolbar>
   
          </f7-page>
        </f7-pages>

      </f7-view>

    </f7-views>

  </div>
</template>




<script>
/*import { mapGetters } from 'vuex'
import { mapState } from 'vuex'*/

export default {
  //we don't want the password in the store
  //but we must handle local storage here
  data: function () {
    return {
      password: ''
    }
   },

  computed: {
    username: {
      get () {
        return this.$store.state.user.username
      },
      set (value) {
        this.$store.commit('setUsername', value)
      }
    },
    profile() {
      return this.$store.state.user.profile;
    },
  },

  methods: {
    login () {
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password,
      }).then(() => {
        this.redirect();
      });
    },
    
    redirect () {
      this.$f7.mainView.router.load({url: '/projects/', force: true})
    }
  }

}
</script>