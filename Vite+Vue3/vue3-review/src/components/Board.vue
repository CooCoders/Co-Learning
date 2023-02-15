<template>
  <form v-on:submit.prevent="addItem">
    <input type="text" v-model="todoTitle" placeholder="input an event" />
    <button>Add</button>
  </form>
  <ul>
    <!-- 
      注意这里 key 和 index 的用处不同
      key：用于唯一标识 todoItem 如果删除了某一项 那么该项的 id 将永远不会出现
      新添加的项的 id 是根据最大的 id 增加得到的 这个增加过程不可逆

      index：index 是数组的索引，总是从0开始，主要用于删除 item 用
      （每次渲染的时候重新从数组中读取）
      
     -->
    <TodoItem
      v-for="(item, index) in todos"
      :title="item.title"
      :key="item.key"
      @remove="todos.splice(index, 1)"
    ></TodoItem>
  </ul>

  <hr />
  <textarea cols="30" rows="10" v-model="texts"></textarea>

  <hr />
  <input type="checkbox" id="checkBox" v-model="checked" />
  <label for="checkBox">{{ checked }}</label>
  <hr />
  <div>{{ checkedNames.sort() }}</div>
  <input type="checkbox" id="zs" value="zhangsan" v-model="checkedNames" />
  <label for="zs">zhangsan</label>
  <input type="checkbox" id="ls" value="lisi" v-model="checkedNames" />
  <label for="ls">lisi</label>
  <input type="checkbox" id="ww" value="wangwu" v-model="checkedNames" />
  <label for="ww">wangwu</label>

  <hr />
  <div>{{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <input type="radio" id="three" value="Three" v-model="picked" />
  <label for="three">Three</label>
</template>

<script setup>
import { ref, reactive } from 'vue'
import TodoItem from './TodoItem.vue'

const texts = ref('some test sentences.')
const checked = ref(true)
let checkedNames = ref([])
const picked = ref('')

const todos = ref([
  {
    id: 1,
    title: 'write some sentences',
  },
  {
    id: 2,
    title: 'play games',
  },
])
let nextId = 3
let todoTitle = ref('')
const addItem = () => {
  todos.value.push({
    id: nextId,
    title: todoTitle.value,
  })
  nextId++
  todoTitle.value = ''
}
</script>
<style scoped></style>
