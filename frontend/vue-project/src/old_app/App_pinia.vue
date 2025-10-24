<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "@/stores/members";


const counterStore = useCounterStore();
const count = computed(
	(): number => {
		return counterStore.counter;
	}
);


const doubleCount = computed(
	(): number => {
		return counterStore.doubleCount;
	}
);


const onIncrimentClick = () => {
	counterStore.incrementCount();
};
</script>



<template>
	<p>現在のポイント：{{ count }}</p>
	<p>現在のポイントx2：{{ doubleCount }}</p>
	<button v-on:click="onIncrimentClick">加算</button>
</template>
