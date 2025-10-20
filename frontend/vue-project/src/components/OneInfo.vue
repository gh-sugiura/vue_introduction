<script setup lang="ts">
// 参考書の書き方
// interface Props {
//     title: string;
//     content: string;
// }
// defineProps<Props>();

const props = defineProps<{
    title: string;
    content: string;
}>();
</script>


<template>
    <section class="box">
        <h4>{{ props.title }}</h4>
        <p>{{ props.content }}</p>
    </section>
</template>


<style scoped>
.box {
    border: 1px solid green;
    margin: 10px;
}
</style>