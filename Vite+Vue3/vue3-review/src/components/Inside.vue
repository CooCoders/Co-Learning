<template>
  <div class="inside-container">

  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps(['aval', 'bval'])

const handler = () => {
  alert('son')
}
</script>
<style scoped></style>