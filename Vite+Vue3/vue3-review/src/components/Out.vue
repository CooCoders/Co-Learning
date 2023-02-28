<template>
  <div class="fa-container">
    <In>
      <template #liItem="obj">
        <p>{{ obj.body }}</p>
        <p>{{ obj.name }} | {{ obj.likes }}</p>
      </template>
    </In>
  </div>
</template>

<script setup>
import { ref, reactive, provide } from 'vue'
import In from './In.vue';


</script>
<style scoped>
.fa-container {
  height: 500px;
  width: 300px;
  background-color: lightskyblue;
}
</style>