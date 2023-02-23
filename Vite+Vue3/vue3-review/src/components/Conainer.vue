<template>
  <FancyList>
    <template #content="{ con, name, likes }">
      <p>{{ con }}</p>
      <p class="meta">{{ name }} | {{ likes }}</p>
    </template>
  </FancyList>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FancyList from './FancyList.vue'

</script>
<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>