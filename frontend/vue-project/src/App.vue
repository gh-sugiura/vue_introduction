<script setup lang="ts">
import { ref, computed } from "vue";
import { divideTwoNums } from "@/functions";


const num1 = ref(6); 
const num2 = ref(3);
const answer = computed(
	(): number => {
		return divideTwoNums(num1.value, num2.value);
	}
);


const isVisible = ref(false);
const onShowButtonClick = (): void => {
	isVisible.value = true;
};
</script>


<template>
	<header>
		<h1>Pinia サンプル</h1>
	</header>
	<main>
		<RouterView />
	</main>


	<div class="for-test">
		<h1>Vitest サンプル</h1>
		<p>
			<input type="number" data-testid="num1" v-model="num1">
			÷
			<input type="number" data-testid="num2" v-model="num2">	
			=<span data-testid="answer">{{ answer }}</span>
		</p>
		<p>
			隠し領域(data-testid="invisible")を
			<button data-testid="showButton" v-on:click="onShowButtonClick">表示</button>
		</p>
		<p v-if="isVisible" data-testid="invisible">
			表示されました
		</p>
	</div>
</template>


<style>
main {
	border: blue 1px solid;
	padding: 10px;
}

#breadcrumbs ul li {
	display: inline;
	list-style-type: none;
}

#breadcrumbs {
	margin-left: 0px;
}

#breadcrumbs ul {
	padding-left: 0px;
}

#breadcrumbs ul .current {
	color: red;
}

#breadcrumbs ul li:before {
	content: " > ";
}

#breadcrumbs ul li:first-child:before {
	content: none;
}

.for-test {
	margin-top: 100px;
}
</style>
