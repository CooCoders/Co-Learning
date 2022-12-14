<template>
  <div class="right">
    <p>Right component</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped>
.right {
  height: 300px;
  width: 300px;
  background-color: steelblue;
  font-size: 20px;
}
</style>
