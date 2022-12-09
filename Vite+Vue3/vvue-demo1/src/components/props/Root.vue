<!-- 父子组件传值 - 父组件 -->
<template>
  <div class="main">
    <p>{{ count }}</p>
    <button @click="add">add</button>
    <div class="content">
      <Child1Vue :cou="count"></Child1Vue>
      <Child2Vue :cou="count"></Child2Vue>
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
