<template>
  <div class="b-container">
    <h3>Page B</h3>
    <p>Pinia data: {{ counterStore.count }}</p>
    <button @click="counterStore.add">Add</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCounterStore from './objStorage';

const counterStore = useCounterStore()



</script>
<style scoped lang="scss">
.b-container {
  height: 20rem;
  width: 100%;
  background-color: lightgreen;
}
</style>