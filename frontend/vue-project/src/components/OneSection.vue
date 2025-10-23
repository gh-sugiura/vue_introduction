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
        <h4>詳細内容</h4>
        <slot name="detail">
            <p>現在、連絡可能です</p>
        </slot>
	</section>
</template>


<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
