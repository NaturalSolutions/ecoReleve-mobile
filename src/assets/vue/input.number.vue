<template>
	<div>
		<f7-label>{{ param.title }}</f7-label>
		<f7-input 
			:name="name" 
			type="number"
			v-model=value
			v-bind:class="{ 'text-danger': hasError }"
			:disabled="false"
			placeholder=""
			>
			
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
		}
	},


	computed: {
	  value: {
	    get () {
	    	console.log(this.name);
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
			disabled: () => {
				// if(this.$store.state.observation.current.status == 'finished' || this.params.disabled){
				//   return true
				// } else {
				// 	return false
				// }
				return false
			}
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
