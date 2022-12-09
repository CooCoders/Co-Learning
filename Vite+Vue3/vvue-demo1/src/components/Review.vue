<!-- review -->
<template>
  <div>
    <!-- 列表渲染 -->
    <ul>
      <li v-for="item in usrList">{{ item.name }}-- {{ item.id }}</li>
    </ul>

    <!-- 条件渲染 -->
    <button @click="showDiv">Toggle</button>
    <div class="show" v-if="tag"></div>

    <!-- 双向数据绑定 -->
    <input type="text" v-model="iptContent" @keyup.esc="clear" />
    <p>{{ iptContent }}</p>

    <p>Res:{{ isTrue }}</p>
    <input type="radio" value="True" v-model="isTrue" /> True
    <input type="radio" value="False" v-model="isTrue" /> False

    <p>Res: {{ checkList.join(' ') }}</p>
    <input type="checkbox" value="beijing" v-model="checkList" />Beijing
    <input type="checkbox" value="nanjing" v-model="checkList" />Nanjing
    <input type="checkbox" value="tokeyo" v-model="checkList" />Tokeyo

    <!-- 动态绑定class -->
    <ul @click="choseLine">
      <li
        v-for="(item, index) in testList"
        :class="{ chgbgc: index === curLine }"
        @click="chgLi(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const usrList = reactive([
  { name: 'zs', id: 11 },
  { name: 'ls', id: 12 },
  { name: 'ww', id: 13 },
])

const tag = ref(false)
const showDiv = () => {
  tag.value = !tag.value
}

const iptContent = ref('')
const clear = (e) => {
  e.target.value = ''
  iptContent.value = ''
}

const isTrue = ref('True')
const checkList = ref([])

const testList = reactive(['line1', 'line2', 'line3'])
const curLine = ref(1)
const chgLi = (ind) => {
  curLine.value = ind
}
</script>
<style scoped>
* {
  margin: 5px;
  padding: 5px;
}
.show {
  height: 50px;
  width: 50px;
  background-color: steelblue;
}
.chgbgc {
  background-color: steelblue;
}
</style>
