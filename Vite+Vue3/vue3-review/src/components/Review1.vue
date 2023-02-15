<template>
  <!-- 插值表达式 -->
  <p>this is number: {{ num }}</p>
  <!-- html渲染 -->
  <p>this is a sentence: <span v-html="rawHtml"></span></p>

  <div v-bind="attrs">DIV</div>

  <button @click="chgref(proxy2.value)">chg-ref</button>
  <button @click="chgreact(proxy3)">chg-react</button>
</template>

<script setup>
import { ref, reactive, useSSRContext } from 'vue'

const num = ref(12)
const rawHtml = ref('<button>button</button>')
const attrs = reactive({
  id: 'test',
  name: 'name',
})

// 代理对象 与 原始对象不相同
const testobj = { name: 'aaa' }
const testobj2 = testobj
const proxy = reactive(testobj)

console.log(testobj === proxy)
console.log(testobj2 === testobj)

// 对 reactive 代理对象进行解构赋值或者参数传递是会失去响应
const proxy1 = reactive({ name: 'zs' })
const { name } = proxy1
console.log(name)

// ref 对 reactive 进行改变
const testobj3 = { age: 21 }
const proxy2 = ref(testobj3)
const proxy3 = reactive(testobj3)

const chgref = (p) => {
  p = 31
  console.log(proxy2.value)
}

const chgreact = (p) => {
  p.age = 41
  console.log(proxy3)
}

// 计算属性的定义
const testComputed = computed(() => {
  return user.age > 10 ? true : false
})
</script>
<style scoped></style>
