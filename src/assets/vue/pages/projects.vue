<template>
  <f7-page with-subnavbar>
  
	  <f7-navbar>
	  	<f7-nav-left>
	  	  <f7-link icon="icon-bars" open-panel="left"></f7-link>
	  	</f7-nav-left>
	  	 <f7-nav-center>Projects</f7-nav-center>
	  	 <f7-subnavbar :slot="$theme.material ? 'after-inner' : 'default'">
	  	   <f7-buttons>
	  	     <f7-button active route-tab-link="#myProjects" href="/projects/">My projects</f7-button>
	  	     <f7-button route-tab-link="#allProjects" href="/projects/all/">All projects</f7-button>
	  	   </f7-buttons>
	  	 </f7-subnavbar>
	  </f7-navbar>

    <f7-tabs>
      <f7-tab route-tab-id="myProjects"></f7-tab>
      <f7-tab active route-tab-id="allProjects"></f7-tab>
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