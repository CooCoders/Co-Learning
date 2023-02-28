<!-- page a -->
<template>
  <div class="a-container">
    <h3>Page A</h3>

    <p>Data from Pinia: {{ counterStore.count }}</p>
    <button @click="counterStore.sub()">Sub</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCounterStore from './objStorage';

const counterStore = useCounterStore()

</script>
<style scoped>
.a-container {
  height: 20rem;
  width: 100%;
  background-color: lightcyan;
}
</style>