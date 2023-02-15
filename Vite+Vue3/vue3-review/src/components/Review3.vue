<template>
  <ul>
    <li v-for="item in items">{{ item.name }}</li>
  </ul>

  <br />
  <ul>
    <li v-for="(item, index) in items">{{ index }} -- {{ item.name }}</li>
  </ul>
  <ul>
    <li v-for="({ name }, index) in items">{{ index }} --- {{ name }}</li>
  </ul>
  <ul>
    <li v-for="({ name }, index) in items">
      {{ index }}-{{ name }}
      <ul>
        <li v-for="({ age }, index) in lists">{{ index }}-{{ age }}</li>
      </ul>
    </li>
  </ul>
  <hr />
  <span v-for="i in 10">{{ i }}</span>
  <hr />
  <ul>
    <li v-for="({ name }, { id }) in list2" :key="id">{{ name }}</li>
  </ul>
  <hr />
  <ul>
    <li v-for="num in evenNums">{{ num }}</li>
  </ul>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const items = ref([{ name: 'zs' }, { name: 'ls' }, { name: 'ww' }])
const lists = ref([{ age: 10 }, { age: 20 }, { age: 30 }])
const list2 = ref([
  { name: 'book', id: 1 },
  { name: 'ball', id: 2 },
  { name: 'pen', id: 3 },
])

const list3 = ref([1, 2, 3, 4, 5, 6])
const evenNums = computed(() => {
  return list3.value.filter((n) => n % 2 === 0)
})
</script>
<style scoped></style>
