<script setup lang="ts">
import { computed } from 'vue'


const randomNumber = computed(
	(): number => {
		Math.random()
		return Math.round(Math.random() * 100);
	}
);


const showOrNot = computed(
	(): boolean => {
		let showOrNot = false;
		const rand = Math.round(Math.random() * 100);
		if(rand >= 50) {
			showOrNot = true;
		}
		return showOrNot;
	}
);
</script>


<template>
	<p>
		得点: {{ randomNumber }}
		<span v-if="randomNumber >= 80">優</span>
		<span v-else-if="randomNumber >= 70">良</span>
		<span v-else-if="randomNumber >= 60">可</span>
		<span v-else>不可</span>
	</p>

	
	<section>
		v-if
		<p v-if="showOrNot">表示されました。</p>
	</section>
	<section>
		v-show
		<p v-show="showOrNot">表示されました。</p>
	</section>
</template>
