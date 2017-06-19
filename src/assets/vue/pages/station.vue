<template>
	<f7-page name="station" no-swipeback>
	  <f7-navbar back-link="Back" title="Project" sliding >
		  <f7-nav-right>
		    <f7-link icon="icon-bars" open-panel="left"></f7-link>
		  </f7-nav-right>
	  </f7-navbar>
	  	<div id="stationMap"></div>
	  	<f7-list form>
	    	<f7-list-item ref="fields" v-for="(field, key) in stationFields" v-bind:key="field.name">

	      <custom-input v-if="field.type === 'Text'" entity="station" :name=key :param=field>
	      </custom-input>

	      <custom-select v-if="field.type === 'Select'" entity="station" :name=key :param=field>
	      </custom-select>

	      <custom-number v-if="field.type === 'Number'" entity="station" :name=key :param=field>
	      </custom-number>

	    </f7-list-item>
	  </f7-list>

		<div class="content-block-title">Observations: </div>
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
	      <f7-button class="full-width" fill @click="finish">Finish</f7-button>
	  </f7-toolbar>

	</f7-page>
</template>

<script>
import CustomInput from './../input.vue'
import CustomSelect from './../input.select.vue'
import CustomNumber from './../input.number.vue'

import Leaflet from 'leaflet'

export default {
	components: {
	  'custom-input': CustomInput,
	  'custom-select': CustomSelect,
	  'custom-number': CustomNumber
	},

	computed: {
		observations() {
			let obs = this.$store.state.projects.current.observations.filter((obs) => {
				let ids = this.$store.state.stations.current.observations;
				for (let i = 0; i < ids.length; i++) {
					return ids[i] === obs.timestamp
				}
			})
		  return obs;
		},
	  stationFields() {
	    return this.$store.state.stations.schema;
	  },
	  id() {
	  	return this.$store.state.projects.current.ID;
	  },   
	  currentStation() {
      return this.$store.state.stations.current;
    },

	},
	beforeCreate() {
		this.$store.dispatch('setCurrentStation', this.$route.params)
	},

	mounted(){

	  let _this = this;

	  if(this.map)
	    return;

	  this.map = L.map('stationMap').setView([45, 0], 5);

	  
	  let icon = L.divIcon({ 
	      iconSize: new L.Point(10, 10), 
	      className: 'custom-marker'
	  });

	  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(this.map);

	  let m;
	  let currentMarker;
	  if(this.currentStation.values.latitude && this.currentStation.values.longitude){
	    m = L.marker(
	      [this.currentStation.values.latitude, this.currentStation.values.longitude], 
	      {icon: icon}
	    ).addTo(this.map)
	    this.map.panTo(m._latlng);
	    currentMarker = m;
	  }

	  //check disabled
	  this.map.on('click', function(e){
	    m = L.marker(e.latlng, { icon: icon })
	    m.addTo(this)
	    _this.$store.commit('setCoordinates', m._latlng)
	    if(currentMarker)
	      _this.map.removeLayer(currentMarker);
	    currentMarker = m;
	  });
	},

	methods: {
		finish(){
			this.$f7.mainView.router.load({url: '/projects/' + this.id})
		}
	}
}
</script>


<style>
  #stationMap{
    height: 300px;
    width: 100%;
  }
</style>