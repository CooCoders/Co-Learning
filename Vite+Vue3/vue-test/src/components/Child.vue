<template>
  <div>
    <input type="text" :placeholder="`${rec.ptext}`" />
    <div :class="`test-${rec.cla}`" class="box"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const rec = defineProps(['cla', 'ptext'])
</script>
<style scoped>
.box {
  height: 200px;
  width: 200px;
}
.test-a {
  background-color: bisque;
}

.test-b {
  background-color: #2b2b2b;
}

.test-c {
  background-color: lightblue;
}
</style>
