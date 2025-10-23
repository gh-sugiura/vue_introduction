<script setup lang="ts">
const props = defineProps<{
    name: string;
}>();
</script>


<template>
	<section class="box">
		<h1>{{ props.name }}さんの状況</h1>
        <slot>
            <p>{{ props.name }}さんは連絡できます</p>
        </slot>
        <slot></slot>
	</section>
</template>


<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
