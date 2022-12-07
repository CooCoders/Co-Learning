<!-- 计算属性 -->
<template>
  <div class="container2">
    <div>
      {{ ct }}
      <button @click="add">add</button>
    </div>
    <div>
      {{ doubleCount() }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const count = ref(2)
const ct = ref(1)
const add = () => {
  ct.value++
}
const dcount = computed(() => {
  console.log('do count')
  return count.value * 2
})
const doubleCount = () => {
  console.log('double count')
  return count.value * 2
}
</script>
<style scoped>
.container2 {
  width: 30%;
  height: 40%;
  background-color: steelblue;
}
</style>
