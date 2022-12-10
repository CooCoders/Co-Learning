<!-- 父子组件传值测试 - 子组件 -->
<template>
  <div class="main2">
    <p>Child component 2</p>
    <p>Recevice father value: {{ receives.cou }}</p>
    <p>Child2 value: {{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const receives = defineProps(['cou'])
const emit = defineEmits(['ch2-event'])

const count = ref(200)
const add = () => {
  count.value++
  emit('ch2-event', count)
}
</script>
<style scoped>
.main2 {
  margin-top: 10px;
  height: 200px;
  width: 200px;
  background-color: burlywood;
}
</style>
