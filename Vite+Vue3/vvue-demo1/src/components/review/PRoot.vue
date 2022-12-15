<!-- pinia test root -->
<template>
  <div>
    <h3>Root Vue</h3>
    <p>Count: {{ storage.count }}</p>
    <button @click="storage.add()">add</button>
    <PCh1Vue></PCh1Vue>
    <PCh2Vue></PCh2Vue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCountStore from './stroe.js'
import PCh1Vue from './PCh1.vue'
import PCh2Vue from './PCh2.vue'

const storage = useCountStore()
</script>
<style scoped></style>
