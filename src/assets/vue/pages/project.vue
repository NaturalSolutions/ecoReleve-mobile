<template>
<f7-page with-subnavbar>
  <f7-navbar back-link="Back" title="Project" sliding>
	  <f7-nav-right>
	    <f7-link icon="icon-bars" open-panel="left"></f7-link>
	  </f7-nav-right>
    <f7-subnavbar sliding :slot="$theme.material ? 'after-inner' : 'default'">
      <f7-buttons>
        <f7-button tab-link="#tab1" active>Observations</f7-button>
        <f7-button tab-link="#tab2">Stations</f7-button>
      </f7-buttons>
    </f7-subnavbar>
  </f7-navbar>

  <f7-tabs class="full-height">
  
    <f7-tab id="tab1" active>
      <f7-list>
        <f7-list-group v-for="observation in observations" v-bind:key="observation.id">
	     		<f7-list-item
	        :link="'/observation/' + observation.timestamp" 
	        :title="'Observation n°' + observation.timestamp"
	        :media="status[observation.finished]"
	      ></f7-list-item>
    		</f7-list-group>
      </f7-list>

      <f7-toolbar bottom class="custom">
          
          <f7-link class="full-width" href="/protocols/">Add an observation
          </f7-link>
      </f7-toolbar>

    </f7-tab>



    <f7-tab id="tab2" class="full-height" @tab:show="onTabShow">
	      <div id="map"></div>
    </f7-tab>



  </f7-tabs>
</f7-page>
</template>

<script>
import Leaflet from 'leaflet'

export default {

	beforeCreate () {
	  this.$store.dispatch('scopeCurrentProject', this.$route.params)
	},


	data: function(){
	  return {
	    status: {
	      true: 'finished',
	      false: 'unfinished',
	      undefined: 'unfinished',
	    }
	  }
	},

	computed: {
	  observations() {
	    return this.$store.state.project.currentProject.observations;
	  },
	  stations() {
	    return this.$store.state.project.currentProject.stations;
	  },
	},



	methods: {
		onTabShow (){
			if(this.map)
				return;

			this.map = L.map('map').setView([51.505, -0.09], 13);

			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(this.map);

			// L.marker([51.5, -0.09]).addTo(this.map)
		}
	}
}
</script>

<style>
	#map{
		min-height: 400px;
		height: 100%;
		width: 100%;
	}

	.full-height{
		height: 100%;
	}
</style>