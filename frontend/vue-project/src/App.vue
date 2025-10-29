<script setup lang="ts">
import { computed, ref } from 'vue';
import OneInfo from './components/OneInfo.vue';
import OneMember from './components/OneMember.vue';


const weatherListsInit: Weather[]  = [
	{id: 1, title: "今日の天気", content: "今日は一日中、晴でしょう。"},
	{id: 2, title: "明日の天気", content: "明日は一日中、雨でしょう。"},
	{id: 3, title: "明後日の天気", content: "明後日は一日中、雪でしょう。"},
];
const weatherLists = ref(weatherListsInit);

interface Weather {
	id: number;
	title: string;
	content: string;
};


const memberListsInit: Member[]  = [
	{id: 1, name: "田中", email: "tanaka@example.com", points: 35, note: "初回特典あり"},
	{id: 2, name: "鈴木", email: "suzuki@example.com", points: 53},
	{id: 3, name: "伊藤", email: "ito@example.com", points: 80},
];
const memberLists = ref(memberListsInit);

interface Member {
	id: number;
    name: string;
    email: string;
    points: number;
    note?: string;
};


const totalPoints = computed(
	(): number => {
		let total = 0;
		for (const member of memberLists.value.values()) {
			total += member.points;
		}
		return total;
	}
);


const onIncrementPoint = (id: number): void => {
	for (const member of memberLists.value) {
		if (member.id === id) {
			member.points++;
			break;
		}
	}
};
</script>


<template>
	<h1>Props基礎</h1>
	<section>
		<h2>ループ</h2>
		<OneInfo
			v-for="weatherList in weatherLists"
			v-bind:key="weatherList.id"
			v-bind:title="weatherList.title"
			v-bind:content="weatherList.content"
		/>
	</section>

	<section>
		<h1>会員リスト</h1>
		<p>全会員の保有ポイントの合計: {{totalPoints}}</p>
		<OneMember
			v-for="member in memberLists"
			v-bind:key="member.id"
			v-bind:id="member.id"
			v-bind:name="member.name"
			v-bind:email="member.email"
			v-model:points="member.points"
			v-bind:note="member.note"
			v-on:incrementPoint="onIncrementPoint"
		/>
	</section>
</template>


<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
