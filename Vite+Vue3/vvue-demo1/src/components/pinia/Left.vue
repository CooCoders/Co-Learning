<!-- pinia 测试 -->
<template>
  <div class="left-container">
    <h3>Left component</h3>
    <p>Count: {{ useCounterStore.count }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCounterStore from '@/store/counterStore.js'
</script>
<style scoped>
.left-container {
  height: 200px;
  width: 200px;
  background-color: bisque;
}
</style>
