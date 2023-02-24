<template>
  <div class="out-container">
    <In>
      <template #content="{ content, name, likes }">
        <p>{{ content }}</p>
        <p>{{ name }}|{{ likes }}</p>
      </template>
    </In>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import In from './In.vue';

const show = ref(true)
</script>
<style scoped>
.out-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  height: 300px;
  width: 400px;
  background-color: lightskyblue;
}
</style>