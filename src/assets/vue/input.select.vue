<template>
	<div>
		<f7-label>{{ param.label }}</f7-label>
		<select :name="param.name" v-model=value>
		  <option v-for="(option, index) in param.options" v-bind:key="option.value">
		  	{{ option.label }}
		  </option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		'param': {
			type: Object
		}
	},

	computed: {
	  value: {
	    get () {
	    	return this.$store.state.observation.current.values[this.param.name];
	    },
	    set (value) {
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
