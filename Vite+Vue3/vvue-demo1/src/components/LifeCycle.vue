<!-- 生命周期 -->
<template>
  <div>
    <p id="pa">{{ count }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount } from 'vue'
const count = ref(11)
onMounted(() => {
  console.log('mounted')
})

onBeforeMount(() => {
  console.log('before mounted')
})
</script>
<style scoped></style>
