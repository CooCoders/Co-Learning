<!-- 父子组件传值 -->
<template>
  <div>
    <p>Child value: {{ text }}</p>
    <button @click="send">send</button>
    <slot name="tst"></slot>
    <slot name="tst2"></slot>

    <slot :txt1="test1" :txt2="test2"></slot>
    <p>inject: {{ rtext }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
const emit = defineEmits(['sendData'])
const text = ref('text from child')
const send = () => {
  emit('sendData', text)
}

const rtext = inject('stext')

const test1 = ref('child text 1')
const test2 = ref('child text 2')
</script>
<style scoped></style>
