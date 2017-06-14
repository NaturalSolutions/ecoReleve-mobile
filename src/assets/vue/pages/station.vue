<template>
	<f7-page name="project" with-subnavbar tabs no-swipeback>
	  <f7-navbar back-link="Back" title="Project" sliding >
		  <f7-nav-right>
		    <f7-link icon="icon-bars" open-panel="left"></f7-link>
		  </f7-nav-right>
	  </f7-navbar>

			Station page

	</f7-page>
</template>

<script>
import Leaflet from 'leaflet'

export default {
	
	beforeCreate() {
		this.$store.commit('setCurrentProject', this.$route.params)
		// this.$store.dispatch('setCurrentStations')
	}
}
</script>


<style>
	
</style>