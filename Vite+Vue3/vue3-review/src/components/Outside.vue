<template>
  <div class="root-container">
    <p>Outside component:</p>
    <input type="text" v-model="val">
    <Inside></Inside>
  </div>
</template>

<script setup>
import { ref, reactive, provide } from 'vue'
import Inside from './Inside.vue';

const val = ref('123')
provide('msg', val)
</script>
<style scoped>
.root-container {
  height: 500px;
  width: 400px;
  background-color: lightblue;
}
</style>