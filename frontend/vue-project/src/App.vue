<script setup lang="ts">
import { ref } from 'vue';
import OneInfo from './components/OneInfo.vue';


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
</template>


<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
