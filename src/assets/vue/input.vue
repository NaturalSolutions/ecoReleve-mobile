<template>
	<div>
		<f7-label>{{ param.label }}</f7-label>
		<f7-input 
			name="name" 
			:type=param.type
			v-model=param.value
			@keyup="onKeyup"
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

	data: function(){
		return{
			hasError: false
		}
	},

	methods: {
		//could certainly be in a watcher
		//set global variable to prevent route change
		onKeyup(e){
			if(this.param.value != 'motif'){
				this.hasError = true
			} else {
				this.hasError = false
			}
			//check value && errors
			
		}
	}
}
</script>
