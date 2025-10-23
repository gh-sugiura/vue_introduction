<script setup lang="ts">
import {ref} from "vue";
import Input from "./components/Input.vue";
import Radio from "./components/Radio.vue";
import Select from "./components/Select.vue";


const currentComponent = ref(Input);
const currentComponentName = ref("Input");
const componentList = [
	Input,
	Radio,
	Select,
];
const componentNameList: string[] = [
	"Input",
	"Radio",
	"Select",
];


let currentComponentIndex = 0;
const switchComponent = (): void => {
	currentComponentIndex++;
	if (currentComponentIndex >= componentList.length) {
		currentComponentIndex = 0;
	}
	currentComponent.value = componentList[currentComponentIndex]!;
	currentComponentName.value = componentNameList[currentComponentIndex]!;
};
</script>


<template>
	<p>コンポーネント名：{{ currentComponentName }}</p>
	<keep-alive>
		<component v-bind:is="currentComponent" />
	</keep-alive>
	<button v-on:click="switchComponent">コンポーネント切り替え</button>
</template>
