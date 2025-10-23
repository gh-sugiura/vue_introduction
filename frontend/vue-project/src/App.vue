<script setup lang="ts">
import { reactive, provide, ref } from 'vue';
import BaseSection from './components/BaseSection.vue';
import OneSection from './components/OneSection.vue';
import type { Member } from './stores/interfaces';


const memberLists = reactive(
	new Map<number, Member>([
		[1, { id: 1, name: "田中", email: "tanaka@example.com", points: 35, note: "初回特典あり" }],
		[2, { id: 2, name: "鈴木", email: "suzuki@example.com", points: 53 }],
		[3, { id: 3, name: "伊藤", email: "ito@example.com", points: 80 }],
	])
);
provide("memberLists", memberLists);


const tanaka = ref("田中太郎");
const suzuki = ref("鈴木次郎");
</script>


<template>
	<section>
		<h2>Slotの利用</h2>
		<OneSection v-bind:name="tanaka">
			<p>{{ tanaka }}さんは連絡がつきません</p>
		</OneSection>
		<OneSection v-bind:name="suzuki"></OneSection>
	</section>
	<BaseSection />
</template>
