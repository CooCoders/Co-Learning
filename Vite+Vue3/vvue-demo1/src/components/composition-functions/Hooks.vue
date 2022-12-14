<!-- 组合式函数 -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import useCount from './useCount'
import useTitle from './useTitle'

const { count, add } = useCount()
useTitle(count)
</script>
<style scoped></style>
