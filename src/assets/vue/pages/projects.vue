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
      <f7-block>
        <f7-list>
          <f7-list-group v-for="project in myProjects" v-bind:key="project.ID">
        <f7-list-item
          checkbox
          :link="'/projects/' + project.ID" 
          :title="'Project ' + project.Name"
        ></f7-list-item>
      </f7-list-group>
        </f7-list>
      </f7-block>
    </f7-tab>

    <f7-tab id="projectTab2">
    <f7-block>
      <f7-list>
        <f7-list-group v-for="project in projects" v-bind:key="project.ID">
      <f7-list-item
        checkbox 
        :link="'/projects/' + project.ID" 
        :title="'Project ' + project.Name"
      ></f7-list-item>
    </f7-list-group>
      </f7-list>
    </f7-block>
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
}
</script>

<style>
	

</style>