<!-- v-for实现循环 并为每个点击的列表项添加点击高亮 -->
<template>
  <div>
    <ul>
      <li
        v-for="item in usrList"
        :class="{ active: item.id === curInd }"
        @click="chgIndex(item.id)"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const usrList = ref([
  { name: 'zs', id: 1 },
  { name: 'ls', id: 2 },
  { name: 'ww', id: 3 },
])
const curInd = ref(1)

const chgIndex = (ind) => {
  curInd.value = ind
}
</script>
<style scoped>
ul {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
}

.active {
  background-color: steelblue;
}
</style>
