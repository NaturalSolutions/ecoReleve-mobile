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

            <li v-on:click="handleMinesProjectsClick($event, project)">
              <a :href="'/projects/' + project.ID" class="item-link">
                <label class="item-content label-checkbox">
                  <input :href="'/projects/' + project.ID" type="checkbox">
                  <div class="item-media">
                    <i v-on:click="" class="icon icon-form-checkbox"></i>
                    <i v-if="project.status == 'undersync'" class="material-icons rotate">{{ icons[project.status] }}</i>
                    <i v-else class="material-icons">{{ icons[project.status] }}</i>
                    
                  </div>
                  <div class="item-inner">
                  <div class="item-title">{{ project.Name }}</div>
                  <!-- <div class="item-after"><span class="badge"></span></div> -->
                  </div>
                </label>
              </a>
            </li>

          </f7-list-group>
        </f7-list>

        <f7-toolbar bottom class="custom">
            <f7-button class="full-width" fill @click="removeSelectedProjects">Remove</f7-button>
            <f7-button class="full-width" fill @click="synchronizeSelectedProjects">Synchronize</f7-button>
        </f7-toolbar>
    </f7-tab>


    <f7-tab id="projectTab2">
      <f7-list>
        <f7-list-group ref="c2" v-for="project in projects" v-bind:key="project.ID">

          <f7-list-item  v-if="project.imported" :param=project :title="project.Name"></f7-list-item>
          <f7-list-item v-else v-on:change="handleAllProjectsClick($event, project)" checkbox :title="project.Name"></f7-list-item>

        </f7-list-group>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-button class="full-width" fill @click="importSelectedProjects">Import</f7-button>
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

  //I don't want checkboxes state in localstorage
  data: function(){
    return {
      selectedToImport: [],
      selectedImported: [],
      icons: {
        'undersync': 'sync',
        'edited': 'clear',
        'sync': 'done',
        '': 'done'
      }
    }
  },


	computed: {
    myProjects() {
      return this.$store.getters.myProjects;
    },
	  projects() {
	    return this.$store.state.projects.projects;
	  },

	},


  methods: {
    importSelectedProjects(){
      for (var i = 0; i < this.selectedToImport.length; i++) {
        this.$store.dispatch('importProject', this.selectedToImport[i]);
      }
      this.selectedToImport = [];
    },

    
    synchronizeSelectedProjects(){
      for (var i = 0; i < this.selectedImported.length; i++) {
        this.$store.dispatch('synchronizeProject', this.selectedImported[i]);
      }
      // this.selectedImported = [];
    },

    removeSelectedProjects(){
      for (var i = 0; i < this.selectedImported.length; i++) {
        this.$store.commit('removeProject', this.selectedImported[i]);
      }
      this.selectedImported = [];
    },


    //handle checkboxes
    handleMinesProjectsClick(e, project){
      if(e.target.className === 'icon icon-form-checkbox'){
        let index = this.selectedImported.indexOf(project)
        if (index > -1) {
          this.selectedImported.splice(index, 1);
        } else {
          this.selectedImported.push(project);
        }
        e.stopPropagation();
      } else {
        //setCurrent project && let redirection
        this.$store.commit('scopeCurrentProject', project);
      }
    },

    handleAllProjectsClick(e, project){
      let index = this.selectedToImport.indexOf(project)
      if (index > -1) {
        this.selectedToImport.splice(index, 1);
      } else {
        this.selectedToImport.push(project); 
      }
    },
  }
}
</script>

<style>
	
.rotate {
    animation-name: rotate; 
    animation-duration: 2s; 
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

</style>