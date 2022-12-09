<!-- 侦听器 watcher -->
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="add">Add</button>
  </div>
</template>

<script setup>
import { ref, reactive, watchEffect, watch } from 'vue'
const count = ref(11)

const add = () => count.value++

watchEffect(() => {
  // console.log(count.value)
})

// watch(count, () => {
//   console.log('new count', count.value)
// })

watch(
  () => {
    return count.value
  },
  () => {
    console.log('count: ', count.value)
  }
)
</script>
<style scoped>
* {
  margin: 5px;
  padding: 5px;
}
</style>
