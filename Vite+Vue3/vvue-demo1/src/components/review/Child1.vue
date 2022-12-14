<!-- 父子组件传值 -->
<template>
  <div>
    <p>Child value: {{ text }}</p>
    <button @click="send">send</button>
    <slot name="tst"></slot>
    <slot name="tst2"></slot>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const emit = defineEmits(['sendData'])
const text = ref('text from child')
const send = () => {
  emit('sendData', text)
}
</script>
<style scoped></style>
