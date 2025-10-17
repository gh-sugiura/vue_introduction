<script setup lang="ts">
import { computed, ref } from 'vue'

const url = ref("https://vuejs.org/");
const isSendButtonDisabled = ref(true);
const widthOrHeight = ref("height");
const widthOrHeightValue = ref(100);

const msg = ref("Hello, World!");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
	textColorRed: false,
	bgColorBlue: true,
});


const computedStyles = computed(
	(): { textColorRed: Boolean; bgColorBlue: Boolean; } => {
		const randText = Math.round(Math.random());
		let textColorFlag = true;
		if (randText === 0) {
			textColorFlag = false;
		}

		const randBg = Math.round(Math.random());
		let bgColorFlag = true;
		if (randBg === 0) {
			bgColorFlag = false;
		}

		return {
			textColorRed: textColorFlag,
			bgColorBlue: bgColorFlag,
		};
	}
);
</script>


<template>
	<p>
		<a v-bind:href="url" target="_blank">Vue.jsのサイト</a>
	</p>
	<p>
		<a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.jsのガイドページ</a>
	</p>
	<p>
		<button v-bind:disabled="isSendButtonDisabled" type="button">SEND</button>
	</p>
	<p>
		<img v-bind:[widthOrHeight]="widthOrHeightValue" src="./assets/logo.svg" alt="Vue logo" />
	</p>


	<p v-bind:class="{textColorRed: true, bgColorBlue: true}">
		{{msg}}
	</p>
	<p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
		{{msg}}
	</p>
	<p v-bind:class="{textColorPink: true}">
		{{msg}}
	</p>
	<p v-bind:class="{'text-color-pink': true}">
		{{msg}}
	</p>
	<p class="textSize24" v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
		{{msg}}
	</p>
	<p class="textSize24" v-bind:class="styles">
		{{msg}}
	</p>
	<p v-bind:class="computedStyles">
		{{msg}}
	</p>
</template>


<style scoped>
.textColorRed {
	color: red;
}

.text-color-pink {
	color: pink;
}

.bgColorBlue {
	background-color: blue;
}

.textSize24 {
	font-size: 24px;
}
</style>
