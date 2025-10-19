<script setup lang="ts">
import { computed, ref } from 'vue'


const cocktailListsInit: string[] = [
	"ホワイトレディ",
	"ブルーハワイ",
	"ニューヨーク",

];
const cocktailLists = ref(cocktailListsInit);


const cocktailListsInit2: {[key: number]: string;} = {
	2345: "ホワイトレディ",
	4412: "ブルーハワイ",
	6792: "ニューヨーク"
};
const cocktailLists2 = ref(cocktailListsInit2);


const cocktailListsInit3 = new Map<number, string>();
cocktailListsInit3.set(2345, "ホワイトレディ");
cocktailListsInit3.set(4412, "ブルーハワイ");
cocktailListsInit3.set(6792, "ニューヨーク");
const cocktailLists3 = ref(cocktailListsInit3);


const whiteLadyInit: {
	id: number;
	name: string;
	price: number;
	recipe: string;
} = {
	id: 2345,
	name: "ホワイトレディ",
	price: 1200,
	recipe: "ジン30ml+コワントロー15ml+レモン果汁+15ml"
};
const whiteLady = ref(whiteLadyInit);

const changeWhiteLadyPrice = (): void => {
	whiteLady.value.price = 1500;
};


const cocktailDataListsInit: Cocktail[]  = [
	{id: 2345, name: "ホワイトレディ", price: 1200},
	{id: 4412, name: "ブルーハワイ", price: 1500},
	{id: 6792, name: "ニューヨーク", price: 1100},
	{id: 8429, name: "マティーニ", price: 1500},
];
const cocktailDataLists = ref(cocktailDataListsInit);

const cocktail1500 = computed(
	(): Cocktail[] => {
		const newList = cocktailDataLists.value.filter(
			(cocktailItem: Cocktail): boolean => {
			return cocktailItem.price == 1500;
			}
		);
		return newList;
	}
);

interface Cocktail {
	id: number;
	name: string;
	price: number;
}


const changeCocktailList = (): void => {
	cocktailLists.value = [
		"マティーニ",
		"ギムレット",
		"モスコミュール",
	];
};

const addCocktailList = (): void => {
	cocktailLists.value.push("ブルームーン");
};

const deleteCocktailList = (): void => {
	cocktailLists.value.pop();
};
</script>


<template>
	<ul>
		<li v-for="cocktailList in cocktailLists" v-bind:key="cocktailList">
			{{ cocktailList }}(index:{{ cocktailList }})
		</li>
	</ul>
	<ul>
		<li v-for="(cocktailList, index) in cocktailLists" v-bind:key="index">
			{{ cocktailList }}(index:{{ index }})
		</li>
	</ul>


	<ul>
		<li v-for="(cocktailList2, id) in cocktailLists2" v-bind:key="'cocktailList2' + id">
			ID:{{ id }}, Cocktail:{{ cocktailList2 }}
		</li>
	</ul>
	<ul>
		<li v-for="(cocktailList2, id, index) in cocktailLists2" v-bind:key="'cocktailList2WithIndex' + id">
			{{ index + 1 }}->ID:{{ id }}, Cocktail:{{ cocktailList2 }}
		</li>
	</ul>


	<ul>
		<li v-for="[id, cocktailList3] in cocktailLists3" v-bind:key="id">
			ID:{{ id }}, Cocktail:{{ cocktailList3 }}
		</li>
	</ul>


	<dl>
		<template v-for="(value, key) in whiteLady" v-bind:key="key">
			<dt>{{ key }}</dt>
			<dd>{{ value }}</dd>
		</template>
		<p><button v-on:click="changeWhiteLadyPrice">ホワイトレディの価格を変更</button></p>
	</dl>


	<ul>
		<li v-for="cocktailDataList in cocktailDataLists" v-bind:key="cocktailDataList.id">
			ID:{{ cocktailDataList.id }}, Name:{{ cocktailDataList.name }}, Price:{{ cocktailDataList.price }}円
		</li>
	</ul>

	<select>
		<option v-for="year in 60" v-bind:key="year" v-bind:value="year + 1965">
			{{ year + 1965 }}
		</option>
	</select>


	<section>
		1500円のカクテル
		<ul>
			<li v-for="cocktailList in cocktail1500" v-bind:key="'cocktail1500' + cocktailList.id">
				Name:{{ cocktailList.name }}, Price:{{ cocktailList.price }}円
			</li>
		</ul>
	</section>


	<ul>
		<li v-for="(cocktailList, index) in cocktailLists" v-bind:key="cocktailList">
			{{ cocktailList }}(index:{{ index }})
		</li>
	</ul>
	<p><button v-on:click="changeCocktailList">カクテルリストを変更</button></p>
	<p><button v-on:click="addCocktailList">ブルームーン追加</button></p>
	<p><button v-on:click="deleteCocktailList">末尾のカクテルを削除</button></p>
</template>
