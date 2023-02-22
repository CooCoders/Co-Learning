<template>
  <div class="out-container">
    <input type="text" v-model="outVal" @input="outVal = $event.target.value">
    <In1 :outVal="outVal" @inVal="handler"></In1>
  </div>
</template>

<script setup>
import { ref, reactive, handleError } from 'vue'
import In1 from './In1.vue';

let outVal = ref('')
const handler = (msg) => {
  outVal.value = msg
}
</script>
<style scoped>
.out-container {
  height: 300px;
  width: 400px;
  padding: 5px;
  background-color: lightgreen;
}
</style>