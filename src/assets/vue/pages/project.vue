<template>
<f7-page with-subnavbar>
  <f7-navbar back-link="Back" title="Projects" sliding>
    <f7-subnavbar sliding :slot="$theme.material ? 'after-inner' : 'default'">
      <f7-buttons>
        <f7-button tab-link="#tab1" active>Observations</f7-button>
        <f7-button tab-link="#tab2">Stations</f7-button>
      </f7-buttons>
    </f7-subnavbar>
  </f7-navbar>

  <f7-tabs>
  
    <f7-tab id="tab1" active>
        <f7-block>
          <f7-list>
            <f7-list-group v-for="observation in observations">
    	     		<f7-list-item
    	        :link="'/observation/' + observation.id" 
    	        :title="'observation ' + observation.name"
    	      ></f7-list-item>
        		</f7-list-group>
          </f7-list>
        </f7-block>
    </f7-tab>

    <f7-tab id="tab2">
	    <f7-block>
	      <f7-list>
	        <f7-list-group v-for="station in stations">
		     		<f7-list-item
		        :link="'/project/' + station.id" 
		        :title="station.name"
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
	  this.$store.commit('setCurrentProject', this.$route.params.id)
	},

	computed: {
	  observations() {
	    return this.$store.state.project.observations;
	  },
	  stations() {
	    return this.$store.state.project.stations;
	  },
	},
}
</script>