<!-- 子组件 - 父组件传值 -->
<template>
  <div>
    <p>Parent value: {{ text }}</p>
    <Child1Vue @sendData="recData">
      <template v-slot:tst>
        <div>some text from parent component</div>
      </template>

      <template v-slot:tst2>
        <div class="test">test paragraph 2</div>
      </template>
    </Child1Vue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Child1Vue from './Child1.vue'

const text = ref('value from parent')

const recData = (msg) => {
  text.value = msg.value
}
</script>
<style scoped>
.test {
  color: red;
  font-size: 20px;
}
</style>
