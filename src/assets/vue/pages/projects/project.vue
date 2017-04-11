<template>
  <f7-page with-subnavbar>
  
	  <f7-navbar back-link="Back" v-bind:title="'Project ' + $route.params.id" sliding>
	    <f7-subnavbar sliding>
	      <f7-buttons>
	        <f7-button route-tab-link="#observations" href="/project/">Observations</f7-button>
	        <f7-button route-tab-link="#stations" href="/project/stations/">Stations</f7-button>
	      </f7-buttons>
	    </f7-subnavbar>
	  </f7-navbar>

	    <f7-tabs>
	      <f7-tab route-tab-id="observations" />
	      <f7-tab route-tab-id="stations" />
	    </f7-tabs>

	    {{ msg }}

  </f7-page>

</template>

<script>
export default {
	data: function() {
	    return{
	        msg: ''
	    }
	  },

	beforeCreate: function () {
		setTimeout( ()=>{
			this.fetchData();
		}, 1000);
	},

	methods: {
	    fetchData: function () {
	      this.msg = 'Ceci est un exemple d\'asynchrone';
	    },
	}
}
</script>

<style>
	

</style>