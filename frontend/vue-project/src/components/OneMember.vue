<script setup lang="ts">
import { computed } from "vue";


const props = defineProps<{
        id: number;
        name: string;
        email: string;
        points: number;
        note?: string;
}>();


const localNote = computed(
	(): string => {
		let localNote = props.note;
		if(localNote == undefined) {
			localNote = "-----";
		}
		return localNote;
	}
);


const emit = defineEmits<{
    (event: "incrementPoint", id: number): void
    // (event: "update:points", points: number): void
}>();


const pointUp = (): void => {
    emit("incrementPoint", props.id);
};
// const onInput = (event: Event): void => {
//     const element = event.target as HTMLInputElement;
//     const inputPoints = Number(element.value);
//     emit("update:points", inputPoints);
// };
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
			<!-- <dd>
                <input type="number" v-bind:value="points" v-on:input="onInput">
            </dd> -->
			<dt>備考</dt>
			<dd>{{ localNote }}</dd>
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