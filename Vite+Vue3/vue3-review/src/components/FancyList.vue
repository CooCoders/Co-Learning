<template>
  <ul>
    <li v-if="!items.length">
      Loading ...
    </li>
    <li v-for="item in items">
      <slot name="content" v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive } from 'vue'

const items = ref([])
setTimeout(() => {
  items.value = [
    { con: 'Condition render', name: 'Ludwig', likes: 20 },
    { con: 'List render', name: 'Hisken', likes: 10 }]
}, 2000)
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}

li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>