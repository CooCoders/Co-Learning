<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Rev1 from './components/Rev1.vue'
</script>

<template>
  <div class="container">
    <Rev1></Rev1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  height: 100%;
}
</style>
