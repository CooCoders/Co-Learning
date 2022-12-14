<!-- pinia 测试 -->
<template>
  <div class="left-container">
    <h3>Left component</h3>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.add()">add</button>
    <button @click="counterStore.sub()">sub</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCounterStore from '@/store/counterStore.js'
const counterStore = useCounterStore()
</script>
<style scoped>
.left-container {
  height: 200px;
  width: 200px;
  background-color: bisque;
}
</style>
