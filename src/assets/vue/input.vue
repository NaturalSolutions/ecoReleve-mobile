<template>
	<div>
		<f7-label>{{ param.label }}</f7-label>
		<f7-input 
			:name="param.name" 
			:type=param.type
			v-model=value
			placeholder="Name"
			v-bind:class="{ 'text-danger': hasError }"
			>
			
			</f7-input>
	</div>
</template>

<script>
export default {
	props: {
		'param': {
			type: Object
		}
	},


	// ...
	computed: {
	  value: {
	    get () {
	    	return this.$store.state.observation.currentObservation[this.param.name];
	    },
	    set (value) {
	    	if(parseInt(this.value) != 1){
	    		this.hasError = true
	    	} else {
	    		this.hasError = false
	    	}
	      this.$store.commit('updateValue', {key: this.param.name, value: value})
	    }
	  }
	},

	data: function(){
		return{
			hasError: false
		}
	},

	methods: {
		//could certainly be in a watcher
		//set global variable to prevent route change
	}
}
</script>
