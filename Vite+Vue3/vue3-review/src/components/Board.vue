<template>
  <form v-on:submit.prevent=""></form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import TodoItem from './TodoItem.vue'

const todos = ref([
  {
    id: 1,
    title: 'write some sentences',
  },
  {
    id: 2,
    title: 'play games',
  },
])
const addItem = () => {}
</script>
<style scoped></style>
