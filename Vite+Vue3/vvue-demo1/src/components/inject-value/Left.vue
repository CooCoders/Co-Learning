<template>
  <div>
    <p>Left Component:{{ text }}</p>
    <Left2Vue></Left2Vue>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import Left2Vue from './Left2.vue'

const text = inject('txt')
</script>
<style scoped></style>
