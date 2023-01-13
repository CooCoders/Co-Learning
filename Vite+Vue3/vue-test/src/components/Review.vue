<template>
  <div>
    <p>count1:{{ cout }}</p>
    <p>count2: {{ cout2 }}</p>
    <button @click="add1">add1</button>
    <button @click="add2">add2</button>
    <Child cla="a" ptext="input something."></Child>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Child from './Child.vue'
const cout = ref(0)
const cout2 = 0

const add1 = () => {
  cout.value++
}

const add2 = () => {
  cout2.value++
}
</script>
<style scoped></style>
