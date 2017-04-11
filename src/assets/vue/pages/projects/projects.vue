<template>
  <f7-page with-subnavbar>
  
	  <f7-navbar back-link="Back" title="Projects" sliding>
	    <f7-subnavbar sliding>
	      <f7-buttons>
	        <f7-button route-tab-link="#myProjects" href="/projects/">My projects</f7-button>
	        <f7-button route-tab-link="#allProjects" href="/projects/all-projects/">All projects</f7-button>
	      </f7-buttons>
	    </f7-subnavbar>
	  </f7-navbar>

	    <f7-tabs>
	      <f7-tab route-tab-id="myProjects" />
	      <f7-tab route-tab-id="allProjects" />
	    </f7-tabs>
  </f7-page>
</template>

<script>
export default {
	data: function () {
	  return {
	 		
	  }
	}
}
</script>

<style>
	

</style>