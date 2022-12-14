<template>
  <div class="left">
    <p>Left component</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped>
.left {
  height: 300px;
  width: 300px;
  background-color: bisque;
  font-size: 20px;
}
</style>
