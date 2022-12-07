<template>
  <div>
    <h3>事件绑定</h3>
    <button v-on:click="add">add</button>
    <p>Number: {{ count }}</p>
    <button @click="chgShow">show</button><br />
    <div class="test" v-if="isShow"></div>

    <input type="text" @:keyup="handleKeyUp" />
    <p>input content:{{ inputContent }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
let count = ref(0)

const isShow = ref(false)

const add = () => {
  count.value += 1
}

const chgShow = () => {
  isShow.value = !isShow.value
}
const inputContent = ref('')
const handleKeyUp = (e) => {
  inputContent.value = e.target.value
}
</script>
<style scoped>
* {
  margin-bottom: 5px;
}
div {
  height: 50%;
  width: 30%;
  padding: 5px;
  background-color: lightgreen;
}
.test {
  height: 50px;
  width: 50px;
  background-color: steelblue;
}
</style>
