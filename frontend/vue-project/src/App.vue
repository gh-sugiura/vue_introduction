<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'


const cocktailNo = ref(1);
const priceMsg = ref("");
// watchEffect(
// 	(): void => {
// 		priceMsg.value = getCocktailInfo(cocktailNo.value);
// 	}
// );


watch(cocktailNo,
	(): void => {
		priceMsg.value = getCocktailInfo(cocktailNo.value);
	}
);


function getCocktailInfo(cocktailNo: number): string {
	const cocktailDataListsInit = new Map<number, Cocktail>();
	cocktailDataListsInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200});
	cocktailDataListsInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500});
	cocktailDataListsInit.set(3, {id: 3, name: "ニューヨーク", price: 1100});
	cocktailDataListsInit.set(4, { id: 4, name: "マティーニ", price: 1500 });

	const cocktail = cocktailDataListsInit.get(cocktailNo);
	let msg = "該当するカクテルはありません。";
	if (cocktail !== undefined) {
		msg = `カクテル：${cocktail.name}、価格：${cocktail.price}円`;
	}
	return msg;
}


interface Cocktail {
	id: number;
	name: string;
	price: number;
}


setInterval(
	(): void => {
		cocktailNo.value = Math.floor(Math.random() * 4) + 1;
	},
	1000
);
</script>


<template>
	<p>Cocktail No:{{ cocktailNo }}</p>
	<p>{{ priceMsg }}</p>
</template>
