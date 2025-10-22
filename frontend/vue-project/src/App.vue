<script setup lang="ts">
import { reactive, provide } from 'vue';
import BaseSection from './components/BaseSection.vue';
import type { Member } from './stores/interfaces';


const memberLists = reactive(
	new Map<number, Member>([
		[1, { id: 1, name: "田中", email: "tanaka@example.com", points: 35, note: "初回特典あり" }],
		[2, { id: 2, name: "鈴木", email: "suzuki@example.com", points: 53 }],
		[3, { id: 3, name: "伊藤", email: "ito@example.com", points: 80 }],
	])
);
provide("memberLists", memberLists);
</script>


<template>
	<BaseSection />
</template>
