<template>
  <div class="ininside-container">
    <p>Ininside component:</p>
    <p>{{ getVal }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'

const getVal = inject('msg')
</script>
<style scoped>
.ininside-container {
  height: 200px;
  background-color: bisque;
}
</style>