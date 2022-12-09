<!-- 父子组件传值测试 - 子组件 -->
<template>
  <div class="main1">
    <p>Child component 1 --- {{ cou }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
defineProps(['cou'])
</script>
<style scoped>
.main1 {
  margin-top: 10px;
  height: 200px;
  width: 200px;
  background-color: bisque;
}
</style>
