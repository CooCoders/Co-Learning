<!-- 响应式基础设置 -->
<template>
  <div class="r-container">
    <h3>响应式数据</h3>
    <button @click="add">{{ state.count }}</button>
    <button @click="add2">{{ count }}</button>
    <hr />
    <div class="bubble-test" @click="alertDiv">
      <button @click.stop="alertBtn">test</button>
    </div>
    <hr />
    <input type="text" @keyup.esc="clear" />

    <hr />
    <input type="text" v-bind:value="val" />
    <input type="text" v-model.number="val1" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const state = reactive({ count: 5 })
const count = ref(0)
const val = ref(100)
const val1 = ref(150)

const add = () => {
  state.count++
}

const add2 = () => {
  count.value += 2
}

const alertDiv = () => {
  alert('div')
}

const alertBtn = () => {
  alert('button')
}

const clear = (e) => {
  e.target.value = ''
}
</script>
<style scoped>
* {
  margin: 5px;
  padding: 3px;
}
.r-container {
  margin: 5px;
  height: 50%;
  width: 30%;
  background-color: lightblue;
}
</style>
