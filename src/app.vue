<template>
  <!-- App -->
  <div id="app" class="framework7-root">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
        <f7-navbar v-if="$theme.ios" title="Left Panel"></f7-navbar>
        <f7-pages navbar-through>
          <f7-page>
            <f7-navbar :title="profile.firstName + ' ' + profile.lastName"></f7-navbar>
            <f7-list>
              <br><br>
              <f7-list-item link="/projects/" title="Projects"></f7-list-item>
            </f7-list>
          </f7-page>


        </f7-pages>
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
              <f7-input v-model="username" id="username" placeholder="Username" type="text"></f7-input>
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
import SHA from 'jssha/src/sha1'

export default {
  data: function () {
    return {
      password: '',
      username: ''
    }
   },

  computed: {
    profile() {
      return this.$store.state.user.profile;
    },
  },

  methods: {
    
    onF7Init(){
      if(this.$cookie.get('ecoReleve-Core')){
        this.redirect()
      }

      let users = this.users = window.ecoreleve.users;

      var autocompleteDropdownAll = this.$f7.autocomplete({
          input: '#username',
          openIn: 'dropdown',
          expandInput: true,
          source: function (autocomplete, query, render) {
            var results = [];
            for (var i = 0; i < users.length; i++) {
                if (users[i].fullname.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(users[i].fullname);
            }            
            render(results);
          }
      });
    },

    login () {
      let userId;
      for (var i = 0; i < this.users.length; i++) {
        if(this.users[i].fullname == this.username) {
          userId = this.users[i].PK_id
        }
      }
      if(!userId){
        console.log('user not found');
        return;
      }
      
      let pwd = this.password;
      pwd = window.btoa(unescape(decodeURIComponent( pwd )));
      var hashObj = new SHA('SHA-1', 'B64', 1);

      hashObj.update(pwd);
      pwd = hashObj.getHash('HEX');
      
      this.$store.dispatch('userLogin', {
        userId: userId,
        password: pwd,
      }).then(() => {
        this.setCookie();
        this.redirect();
      });
    },

    setCookie() {
      this.$store.commit('setCookie', this.$cookie.get('ecoReleve-Core'))
    },
    
    redirect () {
      this.$f7.mainView.router.load({url: '/projects/', force: true})
    },

    clear() {
      window.erase = true
    }

  }

}
</script>

<style>
  .login-page{
    /*background: linear-gradient(rgb(115, 183, 88), rgb(65, 110, 183));*/
  }
</style>