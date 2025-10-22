<script setup lang="ts">
import { computed, inject } from 'vue';
import OneMember from './OneMember.vue';
import type { Member } from '../stores/interfaces';


const memberLists = inject("memberLists") as Map<number, Member>;
const totalPoints = computed(
	(): number => {
		let total = 0;
		for (const member of memberLists.values()) {
			total += member.points;
		}
		return total;
	}
);
</script>


<template>
	<section>
		<h1>会員リスト</h1>
		<p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
		<OneMember
			v-for="id in memberLists.keys()"
			v-bind:key="id"
			v-bind:id="id"
		/>
	</section>
</template>


<style scoped>
section {
    border: 1px solid orange;
    margin: 10px;
}
</style>
