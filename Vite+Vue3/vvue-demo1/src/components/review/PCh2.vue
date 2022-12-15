<!-- child 2 vue -->
<template>
  <div class="ch2-container">
    <h3>Child2 Vue</h3>
    <p>Count: {{ storage.count }}</p>
    <button @click="storage.add()">add</button>
    <div>
      <p>Some text: {{ storage.text }}</p>
      <input type="text" v-model="ipt" />
      <button @click="chg">chg</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCountStore from './stroe'

const storage = useCountStore()
const ipt = ref('')
const chg = () => {
  storage.chg(ipt.value)
}
</script>
<style scoped>
.ch2-container {
  width: 100%;
  height: 300px;
  background-color: bisque;
}
</style>
