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
</script>


<template>
	<header>
		<h1>Pinia サンプル</h1>
	</header>
	<main>
		<RouterView />
	</main>
	<div>
		<p>{{ num1 }} ÷ {{ num2 }} = {{ answer }}</p>
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
</style>
