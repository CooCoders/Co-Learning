<!-- 父子组件传值测试 - 子组件 -->
<template>
  <div class="main2">
    <p>Child component 2 -- {{ receives.cou }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const receives = defineProps(['cou'])
</script>
<style scoped>
.main2 {
  margin-top: 10px;
  height: 200px;
  width: 200px;
  background-color: burlywood;
}
</style>
