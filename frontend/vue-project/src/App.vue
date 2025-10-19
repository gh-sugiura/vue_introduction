<script setup lang="ts">
import {ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered} from "vue";
import type {DebuggerEvent} from "vue";


const hightInit = Math.round(Math.random() * 10);
const widthInit = Math.round(Math.random() * 10);
const height = ref(hightInit);
const width = ref(widthInit);


const area = computed(
	(): number => {
	  	return height.value * width.value;
	}
);


const change = (): void => {
	height.value = Math.round(Math.random() * 10);
	width.value = Math.round(Math.random() * 10);
};


onBeforeMount(
	(): void => {
		console.log(`BeforeMount called: ${height.value} * ${width.value}`);
	}
);


onMounted(
	(): void => {
		console.log(`Mounted called: ${height.value} * ${width.value}`);
	}
);


onBeforeUpdate(
	(): void => {
		console.log(`BeforeUpdate called: ${height.value} * ${width.value}`);
	}
);


onUpdated(
	(): void => {
		console.log(`Updated called: ${height.value} * ${width.value}`);
	}
);


onRenderTracked(
	(event: DebuggerEvent): void => {
		console.log(`RenderTracked called: ${height.value} * ${width.value}`);
		console.log(event);
	}
);


onRenderTriggered(
	(event: DebuggerEvent): void => {
		console.log(`RenderTriggered called: ${height.value} * ${width.value}`);
		console.log(event);
	}
);
</script>


<template>
	<p>area:{{ area }} where height:{{ height }}, width:{{ width }}</p>
	<button v-on:click="change">Change</button>
</template>
