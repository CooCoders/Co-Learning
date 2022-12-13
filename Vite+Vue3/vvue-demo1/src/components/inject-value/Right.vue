<template>
  <div>
    <p>Right Component: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'

const text = inject('txt')
</script>
<style scoped></style>
