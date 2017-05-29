<template>
<f7-page>
  <f7-navbar back-link="Back" title="Choose a protocol" sliding>
	  <f7-nav-right>
	    <f7-link icon="icon-bars" open-panel="left"></f7-link>
	  </f7-nav-right>
  </f7-navbar>


	<f7-list>
	  <f7-list-group ref="c2" v-for="protocol in protocols" v-bind:key="protocols.id">

	    <f7-list-item v-on:click="selectProtocol($event, protocol)" :title="protocol.name">
	    </f7-list-item>

	  </f7-list-group>
	</f7-list>

</f7-page>
</template>

<script>

export default {

	beforeCreate () {
		//we always try to refresh protocol list
	  // this.$store.dispatch('fetchProtocols')
	},

	computed: {
	  protocols() {
	    return this.$store.state.protocols.protocols;
	  },
	},

	methods: {
		selectProtocol(e, proto){
			//generate timestamp
			//redirect && set current proto
			this.$store.commit('setCurrentProtocol', proto)
			let timestamp = new Date().getTime();
			this.$f7.mainView.router.load({url: '/observation/' + timestamp + '/'});
		}
	}
}
</script>

<style>

</style>