<template>
  <div class="inside-container">
    <p>Inside component:</p>
    <Ininside></Ininside>
  </div>
</template>

<script setup>
import { ref, reactive, watch, inject } from 'vue'
import Ininside from './Ininside.vue';


</script>
<style scoped>
.inside-container {
  height: 300px;
  background-color: lightgreen;
}
</style>