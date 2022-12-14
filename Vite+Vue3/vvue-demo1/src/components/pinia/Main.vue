<!-- Pinia 测试 主页面 -->
<template>
  <div class="main-container">
    <h3>Main page</h3>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.add()">add</button>
    <button @click="counterStore.sub()">sub</button>
    <LeftVue></LeftVue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import useCounterStore from '../../store/counterStore.js'
import useCounterStore from '@/store/counterStore.js'
import LeftVue from '@/components/pinia/Left.vue'

const counterStore = useCounterStore()
</script>
<style scoped>
.main-container {
  height: 400px;
  width: 100%;
  background-color: steelblue;
}
</style>
