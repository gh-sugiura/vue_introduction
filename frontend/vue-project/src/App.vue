<script setup lang="ts">
// commit test
import { reactive, provide } from "vue";
import {RouterView} from "vue-router";
import type { Member } from '@/stores/interfaces';


const memberLists = reactive(
	new Map<number, Member>([
		[33456, { id: 33456, name: "田中", email: "tanaka@example.com", points: 35, note: "初回特典あり" }],
		[47783, { id: 47783, name: "鈴木", email: "suzuki@example.com", points: 53 }],
		[53625, { id: 53625, name: "伊藤", email: "ito@example.com", points: 80 }],
	])
);
provide("memberLists", memberLists);
</script>


<template>
	<header>
		<h1>Vue Router サンプル</h1>
	</header>
	<main>
		<RouterView />
	</main>
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
