<template>
  <div>
    <input type="text" v-model="val">
    <Inside v-model="val" @update:model-value="handler"></Inside>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Inside from './Inside.vue';

const val = ref('')

const handler = (msg) => {
  val = msg
}
</script>
<style scoped></style>