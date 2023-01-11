<template>
  <div>
    <p>some test sentence.</p>
    <p>Tag: {{ receives.msg }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const receives = defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>
<style scoped></style>
