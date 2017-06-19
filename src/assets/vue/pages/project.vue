<template>
<f7-page name="project" with-subnavbar tabs>
  <f7-navbar back-link="Back" :title="observations.length + ' Observations'" sliding >
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
        <f7-list-group v-for="observation in observations" v-bind:key="observation.timestamp">
	     		<f7-list-item reload
	        :link="'/projects/' + id + '/observations/' + observation.timestamp" 
	        :title="'Observation n°' + observation.timestamp"
	        :media="observation.status"
	      ></f7-list-item>
    		</f7-list-group>
      </f7-list>

      <f7-toolbar bottom class="custom">
          <f7-link class="full-width" href="/protocols/">Add an observation
          </f7-link>
      </f7-toolbar>

    </f7-tab>

    <f7-tab id="tab2" class="full-height no-padding-bottom" @tab:show="onTabShow">
	      <div id="map"></div>
    </f7-tab>

  </f7-tabs>
</f7-page>
</template>

<script>
import Leaflet from 'leaflet'

export default {

	beforeCreate () {
	  this.$store.commit('setCurrentProject', this.$route.params)
	},

	computed: {
	  observations() {
	    return this.$store.state.projects.current.observations;
	  },
	  stations() {
	    return this.$store.state.stations.stations.filter(station => station.status === 'finished');
	  },
	  id() {
	  	return this.$store.state.projects.current.ID;
	  }
	},


	methods: {
		onTabShow (){

			if(this.map)
				return;

			this.map = L.map('map').setView([45, 0], 5);

			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(this.map);

			let _this = this;

			let icon = L.divIcon({ 
			    iconSize: new L.Point(10, 10), 
			    className: 'custom-marker'
			});

			let m
			for (var i = 0; i < this.stations.length; i++) {
				m = L.marker(
					[this.stations[i].values.latitude, this.stations[i].values.longitude], 
					{
						icon: icon,
						data: this.stations[i]
					},
				);

				m.addTo(this.map)
				m.on('click', function(){
						_this.$f7.mainView.router.load({url: '/projects/' + _this.id + '/stations/' + this.options.data.timestamp });
				});
			}
		},

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