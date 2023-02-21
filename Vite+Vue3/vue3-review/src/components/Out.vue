<template>
  <div class="container">
    <p>Out component:</p>
    <p>{{ texts }}</p>
    <In @get-comment="handler"></In>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import In from './In.vue';

const title = ref('days')

const obj = reactive({ name: 'zhangsan', age: 12 })

const texts = ref('original texts.')
const handler = (...p) => {
  texts.value = p
}
</script>
<style scoped>
.container {
  height: 400px;
  width: 500px;
  border: 1px solid black;
}
</style>