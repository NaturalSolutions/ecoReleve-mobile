<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            coucou
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>


    <!-- Main Views -->
    <f7-views>

      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Airelle</f7-nav-center>
        </f7-navbar>

        <!-- Pages -->
        <f7-pages>
          <f7-page>

          <f7-navbar v-if="$theme.material">
            <f7-nav-left>
              <f7-link icon="icon-bars" open-panel="left"></f7-link>
            </f7-nav-left>
            <f7-nav-center sliding>Airelle</f7-nav-center>
          </f7-navbar>
          
          <f7-list form>
            <f7-list-item>

            
              <f7-label>Username</f7-label>
              <f7-input name="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button v-on:click="login" title="Sign In"></f7-list-button>
          </f7-list>

          <f7-list>
            <f7-list-item link="/projects/" title="Projects"></f7-list-item>
          </f7-list>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>




</template>




<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {

  beforeCreate: function () {
    //check local storage
  },
  
  computed: mapState({
    // les fonctions fléchées peuvent rendre le code très succinct !
    count: state => state.count,

    // passer la valeur littérale 'count' revient à écrire `state => state.count`
    countAlias: 'count',

    // pour accéder au state local avec `this`, une fonction normale doit être utilisée
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),

  methods: {
    
    login: function(){
      console.log(this.username);
    }
  },

}
</script>