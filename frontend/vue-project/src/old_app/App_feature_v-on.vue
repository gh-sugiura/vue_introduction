<script setup lang="ts">
import { ref } from 'vue'


const randValue = ref("まだです")
const onButtonClick = (): void => {
	const rand = Math.round(Math.random() * 10);
	randValue.value = String(rand);
}


const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMouseMove = (event: MouseEvent): void => {
	mousePointerX.value = event.offsetX;
	mousePointerY.value = event.offsetY;
};


const pBgColor = ref("blue");
const onPClick = (bgColor: string): void => {
	pBgColor.value = bgColor;
};


const pMsg = ref("イベント前");
const pBgColorEvent = ref("green");
const onPClickWithEvent = (bgColor: string, event: MouseEvent): void => {
	pBgColorEvent.value = bgColor;
	pMsg.value = event.timeStamp.toString();
};


const msg = ref("まだです。");
const onEntryKey = (): void => {
	msg.value = "エンターキーが押されました。";
};
const onRightButtonCkick = (): void => {
	msg.value = "右クリックされました。";
};
function onShiftClick(): void {
	msg.value = "Shiftキーを押しながらクリックされました。";
}
</script>


<template>
	<section>
		<button v-on:click="onButtonClick">クリック</button>
		<p>result:{{ randValue }}</p>
	</section>

	<section>
		<img
			v-on:mousemove="onImgMouseMove"
			src="./assets/logo.svg"
			alt="Vue logo"
			width="200px"
		/>
		<p>マウスポインタの座標: X={{ mousePointerX }} , Y={{ mousePointerY }}</p>
	</section>

	<p 
		v-on:click="onPClick('red')"
		v-bind:style="{ backgroundColor: pBgColor }"
	>
		クリックすると背景色が変わります
	</p>

	<p 
		v-on:click="onPClickWithEvent('red', $event)"
		v-bind:style="{ backgroundColor: pBgColorEvent }"
	>
		{{ pMsg }}
	</p>

	<p>{{ msg }}</p>
	<input type="text" v-on:keydown.enter="onEntryKey"/>
	<button v-on:click.right="onRightButtonCkick">右クリック</button>
	<button v-on:click.shift="onShiftClick">Shiftキーを押しながらクリック</button>
</template>
