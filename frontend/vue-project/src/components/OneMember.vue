<script setup lang="ts">

const props = withDefaults(
    defineProps<{
        id: number;
        name: string;
        email: string;
        points: number;
        note?: string;
    }>(),
    {
        note: "-----"
    }
);


const emit = defineEmits<{
    (event: "incrementPoint", id: number): void
}>();


const pointUp = (): void => {
    emit("incrementPoint", props.id);
};
</script>


<template>
    <section class="box">
		<h4>{{ props.name }}さんの情報</h4>
		<dl>
			<dt>ID</dt>
			<dd>{{ props.id }}</dd>
			<dt>メールアドレス</dt>
			<dd>{{ props.email }}</dd>
			<dt>保有ポイント</dt>
			<dd>{{ props.points }}</dd>
			<dt>備考</dt>
			<dd>{{ props.note }}</dd>
		</dl>
		<button v-on:click="pointUp">ポイント加算</button>
	</section>
</template>


<style scoped>
.box {
    border: 1px solid green;
    margin: 10px;
}
</style>