<template>
  <div>
    <p>{{ text }}</p>
    <button @click="chg">change</button>
    <LeftVue></LeftVue>
    <RightVue></RightVue>

    <p>Receive Value: {{ rtext }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, provide, inject } from 'vue'
import LeftVue from './Left.vue'
import RightVue from './Right.vue'

const rtext = inject('stext')
const text = ref('original texts')
provide('txt', text)
const chg = () => {
  text.value = 'changed texts'
}
</script>
<style scoped></style>
