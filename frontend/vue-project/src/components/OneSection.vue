<script setup lang="ts">
const props = defineProps<{
    name: string;
}>();
</script>


<template>
	<section class="box">
		<h1>{{ props.name }}さんの状況</h1>
        <slot>
            <p>連絡できます</p>
        </slot>
	</section>
</template>


<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
