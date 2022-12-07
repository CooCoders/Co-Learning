<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
</script>

<template>
  <div class="container">
    <Test></Test>
    <Test2></Test2>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
