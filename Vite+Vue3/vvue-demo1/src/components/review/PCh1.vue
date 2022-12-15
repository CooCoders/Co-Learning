<template>
  <div class="ch1-container">
    <h3>Child1 Vue</h3>
    <p>Count: {{ storage.count }}</p>
    <button @click="storage.add()">add</button>
    <div>
      <p>Some text: {{ storage.text }}</p>
      <input type="text" v-model="ipt" />
      <button @click="chgText()">chg</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCountStore from './stroe'

const storage = useCountStore()
const ipt = ref('')
const chgText = () => {
  storage.chg(ipt.value)
  ipt.value = ''
}
</script>
<style scoped>
.ch1-container {
  height: 300px;
  width: 100%;
  background-color: steelblue;
}
</style>
