<template>
  <div>
    <h3>事件绑定</h3>
    <button v-on="add">add</button>
    <p>Number: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
let count = ref(0)
</script>
<style scoped>
div {
  height: 50%;
  width: 30%;
  padding: 5px;
  background-color: lightgreen;
}
p {
  margin-left: 5px;
  display: inline-block;
}
</style>
