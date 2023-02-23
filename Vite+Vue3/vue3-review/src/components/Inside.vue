<template>
  <div>
    <input type="text" v-model="props.modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <p>{{ props.modelValue }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
</script>
<style scoped></style>