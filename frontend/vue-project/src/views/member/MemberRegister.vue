<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import type { Member } from "@/stores/interfaces";
import { useMembersStore } from "@/stores/members";


const router = useRouter();
const membersStore = useMembersStore();
const member: Member = reactive(
	{
		id: 0,
		name: "",
		email: "",
		points: 0,
		note: ""
	}
);


const onRegister = async (): Promise<void> => {
	try {
		const result = await membersStore.insertMember(member);
		if (result) {
			await router.push({ name: "MemberList" });
		}
	} catch (error) {
		console.error("データ登録失敗", error);
	} finally {
		console.log("finallyの練習");
	}
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
