<template>
  <div>
    <p>Left2 Component: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, inject, provide } from 'vue'

const text = inject('txt')

const sendText = provide('stext', 'from child')
</script>
<style scoped></style>
