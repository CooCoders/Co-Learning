<template>
  <div class="inside">
    <h3>{{ count }}</h3>
    <button @click="add()">add</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)

const add = () => {
  count.value++
}
</script>
<style scoped>
.inside {
  height: 200px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: bisque;
}
</style>
