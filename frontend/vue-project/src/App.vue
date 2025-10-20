<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
	name: "App",
	data() {
		return {
			height: Math.round(Math.random() * 10),
			width: Math.round(Math.random() * 10),
		};
	},

	computed: {
		area(): number {
			return this.height * this.width;
		},
	},

	methods: {
		change(): void {
			this.height = Math.round(Math.random() * 10);
			this.width = Math.round(Math.random() * 10);
		},
	},

	updated(): void {
		console.log(`Updated called: ${this.height} * ${this.width}`);
	},
});
</script>


<template>
	<p>area:{{ area }} where height:{{ height }}, width:{{ width }}</p>
	<button v-on:click="change">Change</button>
</template>
