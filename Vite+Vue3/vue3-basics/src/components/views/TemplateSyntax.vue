<template>
  <div>
    <p>{{ count }}</p>
    <div v-html="text1"></div>
    <div v-bind:title="tips">this is a div block</div>
    <div v-bind="obj">this is another div block</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const count = ref(0)
const text1 = ref('<h2>test title</h2>')
const tips = ref('divvvv')
const obj = ref({
  prop1: 'prop1',
  prop2: 'prop2',
})
</script>
<style scoped></style>
