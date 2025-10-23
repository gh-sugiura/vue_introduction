<script setup lang="ts">
import { reactive } from 'vue';


interface TanakaInfo {
  name: string;
  state: string;
}

const tanakaInfo = reactive<TanakaInfo>({
    name: "田中太郎",
    state: "連絡できます",
});
</script>


<template>
	<section class="box">
        <slot v-bind:tanakaInfo="tanakaInfo">
            <h1>{{ tanakaInfo.name }}さんの状況</h1>
            <p>{{ tanakaInfo.state }}</p>
        </slot>
    </section>
</template>


<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
