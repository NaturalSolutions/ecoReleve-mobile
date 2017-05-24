<template>
<f7-page with-subnavbar>
  <f7-navbar title="Projects" sliding>
	  <f7-nav-right>
	    <f7-link icon="icon-bars" open-panel="left"></f7-link>
	  </f7-nav-right>
    <f7-subnavbar sliding :slot="$theme.material ? 'after-inner' : 'default'">
      <f7-buttons>
        <f7-button tab-link="#projectTab1" active>My projects</f7-button>
        <f7-button tab-link="#projectTab2">All projects</f7-button>
      </f7-buttons>
    </f7-subnavbar>
  </f7-navbar>

  <f7-tabs>







    <f7-tab id="projectTab1" active>

        <f7-list>
          <f7-list-group  v-for="project in myProjects" v-bind:key="project.ID">

            <f7-list-item
              v-on:click="handleMinesProjectsClick($event, project)"
              checkbox
              :link="'/projects/' + project.ID" 
              :title="'Project ' + project.Name"
              value="project.ID"
            ></f7-list-item>

          </f7-list-group>
        </f7-list>

        <f7-toolbar bottom class="custom">
            <f7-button class="full-width" fill @click="">Sync</f7-button>
        </f7-toolbar>
    </f7-tab>


    <f7-tab id="projectTab2">
      <f7-list>
        <f7-list-group ref="c2" v-for="project in projects" v-bind:key="project.ID">

          <f7-list-item  v-if="project.mine" :param=project :title="'Project ' + project.Name"></f7-list-item>
          <f7-list-item v-else v-on:change="handleAllProjectsClick($event, project)" checkbox :title="'Project ' + project.Name"></f7-list-item>

        </f7-list-group>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" fill @click="importSelectedProjects">import</f7-button>
      </f7-toolbar>
      
    </f7-tab>









  </f7-tabs>
</f7-page>
</template>

<script>
export default {

	beforeCreate () {
    this.$store.dispatch('fetchProjects')
	},

	computed: {
	  myProjects() {
	    return this.$store.getters.myProjects;
	  },
	  projects() {
	    return this.$store.state.projects.projects;
	  },
	},

  ready: function () {
    console.log( "here are my comp2 refs:", this.$refs );
  },

  methods: {
    importSelectedProjects(){
      //need to find wich are selected, state?
      this.$store.commit('toggleImportedProject', [project]);
    },


    handleMinesProjectsClick(e, project){
      if(e.target.className === 'icon icon-form-checkbox'){
        this.$store.commit('toggleImportedProject', [project]);
        e.stopPropagation();
      } else {
        //setCurrent project
      }
    },

    handleAllProjectsClick(e, project){
      this.$store.commit('toggleImportedProject', [project]);
    },
  }
}
</script>

<style>
	

</style>