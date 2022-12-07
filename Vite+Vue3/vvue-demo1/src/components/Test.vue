<template>
  <div class="container1">
    <h3>模板表达式</h3>
    <p>this is a test count {{ count }}</p>
    <div v-html="hContent"></div>
    <p v-bind:title="textTips">some texts</p>
    <div v-bind="tipObj">div</div>
    <div v-bind="propObj">div</div>
    <p>Number: {{ count + 1 }}</p>
    <p>{{ count == 0 ? 'Yes' : 'No' }}</p>

    <input type="text" v-bind:placeholder="notionText" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const count = ref(0)
const hContent = ref('<h3>Test h3 title</h3>')
const textTips = ref('this is a p label')
const tipObj = ref({
  h: '100px',
  w: '100px',
})
const propObj = ref({
  id: 1,
  name: 'test',
})

const notionText = ref('some texts')
</script>
<style scoped>
.container1 {
  height: 50%;
  width: 30%;
  padding: 5px;
  font-size: 18px;
  background-color: steelblue;
}
</style>
