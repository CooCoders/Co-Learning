<template>
  <div class="inside">
    <h3>{{ obj }} -- {{ obj.name }}</h3>

    <div class="div1" v-bind="props">some texts</div>
    <button @click="chg">chg</button>
    <div class="div2" v-if="isshow"></div>

    <p>{{ count }}</p>
    <button @click="add()">add</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const obj = reactive({ name: 'zs', age: 19 })

const props = reactive({ title: 'div', height: '100' })

const isshow = ref(true)

const chg = () => {
  isshow.value = !isshow.value
}

const count = ref(0)
const add = () => {
  count.value++
}
</script>
<style scoped>
.div2 {
  height: 100px;
  width: 100px;
  background-color: lightblue;
}
</style>
