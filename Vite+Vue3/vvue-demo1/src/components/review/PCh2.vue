<!-- child 2 vue -->
<template>
  <div>
    <h3>Child2 Vue</h3>
    <p>Count: {{ storage.count }}</p>
    <button @click="storage.add()">add</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCountStore from './stroe'

const storage = useCountStore()
</script>
<style scoped></style>
