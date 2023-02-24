<template>
  <div>
    <ul>
      <li v-if="!items.length">Loading ...</li>
      <li v-for="item in items">
        <slot name="content" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const items = ref([])
setTimeout(() => {
  items.value = [
    { content: 'vue model learning.', name: 'Evean', likes: 20 },
    { content: 'vue componets', name: 'Lily', likes: 10 }
  ]
}, 2000)
</script>
<style scoped>
ul {
  list-style-type: none;
}

li {
  background-color: bisque;
  height: 80px;
}
</style>