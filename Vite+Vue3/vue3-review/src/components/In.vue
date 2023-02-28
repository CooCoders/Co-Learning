<template>
  <ul>
    <li v-if="!items.length">Loading...</li>
    <li v-for="item in items">
      <slot name="liItem" v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'

const items = ref([])
setTimeout(() => {
  items.value = [
    { body: 'vue, single page application', name: 'Lugwig', likes: 20 },
    { body: 'vue router', name: 'Ray', likes: 10 }
  ]
}, 3000)
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

ul {
  margin-left: 0;
  list-style-type: none;
  overflow: hidden;
}

li {
  margin: 5px;
  padding: 2px;
  height: 70px;
  background-color: bisque;
}
</style>