<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script setup>
import { ref, reactive } from 'vue'

defineProps(['title'])
defineEmits(['remove'])
</script>
<style scoped></style>
