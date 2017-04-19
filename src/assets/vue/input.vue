<template>
	<div>
		<f7-label>{{ param.name }}</f7-label>
		<f7-input name="name" v-model=param.value type="text" placeholder="Name"></f7-input>
	</div>
</template>

<script>


export default {
	props: {
		'param': {
			type: Object
		}
	},
}
</script>
