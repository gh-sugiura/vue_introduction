<script setup lang="ts">
import { inject, computed } from "vue";
import { RouterLink } from "vue-router";
import type { Member } from "@/stores/interfaces";


const props = defineProps<{
    id: number;
}>();


const memberLists = inject("memberLists") as Map<number, Member>;
const memberDetail = computed(
	(): Member => {
		return memberLists.get(props.id) as Member;
	}
);


const localNote = computed(
    (): string => {
        let localNote = "-----";
        if (memberDetail.value.note !== undefined) {
            localNote = memberDetail.value.note;
        }
        return localNote;
    }
);
</script>


<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<RouterLink v-bind:to="{name: 'AppTop'}">
					TOP
				</RouterLink>
			</li>
			<li>
				<RouterLink v-bind:to="{name: 'MemberList'}">
					会員リスト
				</RouterLink>
			</li>
			<li>会員詳細情報</li>
		</ul>
	</nav>
	<section>
		<h2>会員詳細情報</h2>
		<dl>
			<dt>ID</dt>
			<dd>{{memberDetail.id}}</dd>
			<dt>名前</dt>
			<dd>{{memberDetail.name}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{memberDetail.email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{memberDetail.points}}</dd>
			<dt>備考</dt>
			<dd>{{localNote}}</dd>
		</dl>
	</section>
</template>
