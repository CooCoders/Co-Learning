<template>
  <p>this is a counter {{ count }}</p>
  <button @click="add">Add</button>
</template>

<script setup>
import { ref, reactive } from 'vue'

let count = ref(0)
const add = () => {
  count.value++
}
</script>
<style scoped></style>
