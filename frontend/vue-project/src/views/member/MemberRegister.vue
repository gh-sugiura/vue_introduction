<script setup lang="ts">
import {inject, reactive} from "vue";
import {RouterLink, useRouter} from "vue-router";
import type { Member } from "@/stores/interfaces";


const router = useRouter();
const memberLists = inject("memberLists") as Map<number, Member>;
const member: Member = reactive(
	{
		id: 0,
		name: "",
		email: "",
		points: 0,
		note: ""
	}
);


const onRegister = (): void => {
	console.log(member);
	memberLists.set(member.id, member);
	router.push({name: "MemberLists"});
	// router.push({name: "MemberDetail", params: {id: member.id}});
};
</script>


<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li><RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink></li>
			<li><RouterLink v-bind:to="{name: 'MemberList'}">会員リスト</RouterLink></li>
			<li>会員情報追加</li>
		</ul>
	</nav>
	<section>
		<h2>会員情報追加</h2>
		<p>
			情報を入力し、登録ボタンをクリックしてください。
		</p>
		<form v-on:submit.prevent="onRegister">
			<dl>
				<dt>
					<label for="registerId">ID&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="registerId" v-model.number="member.id" required>
				</dd>
				<dt>
					<label for="registerName">名前&nbsp;</label>
				</dt>
				<dd>
					<input type="text" id="registerName" v-model="member.name" required>
				</dd>
				<dt>
					<label for="registerEmail">メールアドレス&nbsp;</label>
				</dt>
				<dd>
					<input type="email" id="registerEmail" v-model="member.email" required>
				</dd>
				<dt>
					<label for="registerPoints">保有ポイント&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="registerPoints" v-model.number="member.points" required>
				</dd>
				<dt>
					<label for="registerNote">備考</label>
				</dt>
				<dd>
					<textarea id="registerNote" v-model="member.note"></textarea>
				</dd>
			</dl>
			<button type="submit">登録</button>
		</form>
	</section>
</template>
