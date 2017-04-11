<template>

	<f7-list>
	  <f7-list-group v-for="obs in observations">
	    <f7-list-item :link="'/observations/' + obs.id" :title="'Observation ' + obs.name"></f7-list-item>
	  </f7-list-group>
	</f7-list>

</template>

<script>
export default {
  data: function () {
    return {
      observations: [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        }
      ]
    }
  }
}
</script>