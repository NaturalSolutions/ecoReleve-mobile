<template>
	<div>
		<f7-label>{{ param.title }}</f7-label>
		<f7-input
			:name="name" 
			type="select" 
			v-model=value
			v-bind:class="{ 'text-danger': hasError }"
			:disabled="disabled"

		>
		  <option v-for="(option, index) in param.options" v-bind:key="option.value">
		  	{{ option.label }}
		  </option>
		</f7-input>
	</div>
</template>

<script>
export default {
	props: {
		'param': {
			type: Object
		},
		name: {
			type: String
		},
		disabled: {
			type: Boolean
		}
	},

	computed: {
	  value: {
	    get () {
	    	let value = this.$store.state.observation.current.values[this.name];
				this.check(value);
	    	return value;
	    },
	    set (value) {
	    	this.check(value);
	      this.$store.commit('updateValue', {key: this.name, value: value})
	    }
	  }
	},

	data: function(){
		return{
			hasError: false,
		}
	},

	methods: {
		check(value) {
			this.checkRequired(value);
			this.checkValue(value);
		},

		checkRequired(value) {
			let required = false;
			if(this.param.validators){
				if(this.param.validators[0] == 'required'){
					required = true;
				}
			}

			if(!value && required){
				this.hasError = true;
			} else {
				this.hasError = false;
			}
		},

		checkValue(value) {
			//custom test
		},
	}
}
</script>
