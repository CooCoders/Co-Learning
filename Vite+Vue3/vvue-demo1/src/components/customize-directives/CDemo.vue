<!-- 自定义指令 -->
<template>
  <div>
    <label for="ipt">INPUT: </label>
    <input type="text" v-focus />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped></style>
