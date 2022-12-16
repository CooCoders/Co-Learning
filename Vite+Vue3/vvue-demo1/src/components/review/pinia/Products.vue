<!-- Products page -->
<template>
  <div class="prod-container">
    <h3>Products page</h3>
    <ul>
      <li v-for="item in goodstore.goods">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import useGoodStore from '../store/goodstore.js'

const goodstore = useGoodStore()
goodstore.goods.forEach((item) => {
  console.log(item)
})
</script>
<style scoped>
.prod-container {
  height: 300px;
  width: 50%;
  background-color: cadetblue;
}
</style>
