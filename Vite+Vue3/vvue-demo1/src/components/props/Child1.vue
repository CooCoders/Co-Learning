<!-- 父子组件传值测试 - 子组件 -->
<template>
  <div class="main1">
    <p>Child component 1</p>
    <p>Receive father value: {{ recData.cou }}</p>
    <p>Child value: {{ count }}</p>
    <button @click="add">add</button>
    <button @click="send">send</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const recData = defineProps(['cou'])
const emit = defineEmits(['ch1-event'])
const count = ref(100)
const add = () => {
  count.value++
}

const send = () => {
  emit('ch1-event', count)
}
// defineProps(['cou'])
</script>
<style scoped>
.main1 {
  margin-top: 10px;
  height: 200px;
  width: 200px;
  background-color: bisque;
}
</style>
