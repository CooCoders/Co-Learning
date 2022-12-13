<!-- 子组件->父组件传值 -->
<template>
  <div class="inside">
    <p>Parent value: {{ chVal }}</p>
    <Child1Vue v-model:sendVal="chVal"></Child1Vue>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Child1Vue from './Child1.vue'
const chVal = ref('some original value')
</script>
<style scoped>
.inside {
  height: 300px;
  width: 300px;
  border: 1px solid black;
}
</style>
