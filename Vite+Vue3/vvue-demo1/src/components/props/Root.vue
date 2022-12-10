<!-- 父子组件传值 - 父组件 -->
<template>
  <div class="main">
    <p>Father Component: {{ count }}</p>
    <button @click="add">add</button>
    <p>Child 1 value:{{ ch1val }}</p>
    <p>Child 2 value: {{ ch2val }}</p>
    <div class="content">
      <Child1Vue :cou="count" @ch1-event="handleCh1"></Child1Vue>
      <Child2Vue :cou="count" @ch2-event="handleCh2"></Child2Vue>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Child1Vue from './Child1.vue'
import Child2Vue from './Child2.vue'

const count = ref(12)
const add = () => {
  count.value++
}

const ch1val = ref('')
const handleCh1 = (msg) => {
  // console.log(msg.value)
  ch1val.value = msg.value
}

const ch2val = ref('')
const handleCh2 = (msg) => {
  // console.log(msg.value)
  ch2val.value = msg.value
}
</script>
<style scoped>
.main {
  margin: 5px;
  padding: 5px;
  height: 300px;
  width: 500px;
  background-color: steelblue;
}

.content {
  display: flex;
  justify-content: space-around;
}
</style>
