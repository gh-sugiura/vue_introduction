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
    (event: "update:points", points: number): void
}>();


const onInput = (event: Event): void => {
    const element = event.target as HTMLInputElement;
    const inputPoints = Number(element.value);
    emit("update:points", inputPoints);
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
			<dd>
                <input type="number" v-bind:value="points" v-on:input="onInput">
            </dd>
			<dt>備考</dt>
			<dd>{{ props.note }}</dd>
		</dl>
	</section>
</template>


<style scoped>
.box {
    border: 1px solid green;
    margin: 10px;
}
</style>