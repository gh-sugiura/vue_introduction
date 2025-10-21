<script setup lang="ts">
import { ref, computed } from "vue"


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


const localPoints = ref(props.points);
const pointUp = (): void => {
    localPoints.value ++;
};



// const localNote = computed(
//     (): string => {
//         let localNote = props.note;
//         if (localNote === undefined) {
//             localNote = "-----";
//         }
//         return localNote;
//     }
// );
</script>


<template>
    <section class="box">
		<h4>{{name}}さんの情報</h4>
		<dl>
			<dt>ID</dt>
			<dd>{{props.id}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{props.email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{localPoints}}</dd>
			<dt>備考</dt>
			<dd>{{props.note}}</dd>
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