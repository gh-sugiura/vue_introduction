<script setup lang="ts">
import { inject } from "vue";
import { RouterLink } from "vue-router";
import type { Member } from "@/stores/interfaces";


const memberLists = inject("memberLists") as Map<number, Member>;
</script>


<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink>
            </li>
            <li>会員リスト</li>
        </ul>
    </nav>
    <section>
        <h2>会員リスト</h2>
        <p>
            新規登録は
            <RouterLink v-bind:to="{ name: 'MemberRegister' }">
                こちら
            </RouterLink>
            から
        </p>
        <section>
            <ul>
                <li
                    v-for="[id, memberList] in memberLists"
                    v-bind:key="id"
                >
                    <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: id } }">
                        ID:{{ id }}、名前:{{ memberList.name }}さん
                    </RouterLink>
                </li>
            </ul>
        </section>
    </section>
</template>