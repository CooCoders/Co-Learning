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

    <hr />
    <button @click="show">Toggle</button>
    <div class="show" v-if="isShow"></div>

    <hr />
    <button @click="add">add</button>
    <button @click="sub">sub</button>
    <p>{{ point }}</p>
    <p>
      <span v-if="point <= 3">A</span>
      <span v-else-if="point <= 6">B</span>
      <span v-else>C</span>
    </p>

    <template v-if="tag">
      <p>pppp1</p>
      <p>pppp2</p>
    </template>

    <ul>
      <li v-for="(v, k, i) in bookList[0]">{{ i }}--{{ k }}--{{ v }}</li>
    </ul>

    <ul>
      <li v-for="item in bookList">
        {{ item.bookname }}--{{ item.author }}--{{ item.date }}
      </li>
    </ul>

    <hr />
    <input type="text" v-model.number="ipt" />
    <p>{{ res }}</p>
    <button @click="chgRes">add</button>
    <hr />
    <button @click="print1(), print2()">cli</button>

    <hr />
    <div>
      {{ picked }}
      <input type="radio" value="One" v-model="picked" /> One
      <input type="radio" value="Two" v-model="picked" /> Two
      <input type="radio" value="Three" v-model="picked" /> Three
    </div>

    <div>
      {{ selected }}
      <input type="checkbox" value="one" v-model="selected" /> one
      <input type="checkbox" value="two" v-model="selected" /> two
      <input type="checkbox" value="three" v-model="selected" /> three
    </div>

    <div>
      {{ selectedVal }}
      <select v-model="selectedVal">
        <option>beijign</option>
        <option>nanjing</option>
        <option>dongjing</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const selectedVal = ref()
const selected = ref([])
const picked = ref('One')

const print1 = () => {
  console.log('11111')
}

const print2 = () => {
  console.log('22222')
}

const ipt = ref(0)
const res = ref(0)
const chgRes = () => {
  res.value += ipt.value
}

const bookList = reactive([
  {
    bookname: 'xiyouji',
    author: 'wu',
    date: '1900',
  },
  {
    bookname: 'shuihuzhuan',
    author: 'shi',
    date: '1900',
  },
])

const usrList = ref([
  { name: 'zs', id: 1 },
  { name: 'ls', id: 2 },
  { name: 'ww', id: 3 },
])
const tag = ref(true)
const curInd = ref(1)
const isShow = ref(false)

const point = ref(0)
const add = () => {
  point.value++
}
const sub = () => {
  point.value--
}

const chgIndex = (ind) => {
  curInd.value = ind
}

const show = () => {
  isShow.value = !isShow.value
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

.show {
  height: 100px;
  width: 100px;
  background-color: steelblue;
}
</style>
