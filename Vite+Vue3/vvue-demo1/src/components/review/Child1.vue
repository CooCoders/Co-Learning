<template>
  <div>
    <div class="container">
      <p>Child value:</p>
      <button @click="send">send</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const val = ref('value from child')
const emit = defineEmits(['update:sendVal'])

const send = () => {
  emit('update:sendVal', val.value)
}
</script>
<style scoped>
.container {
  height: 200px;
  width: 200px;
  border: 1px solid black;
}
</style>
