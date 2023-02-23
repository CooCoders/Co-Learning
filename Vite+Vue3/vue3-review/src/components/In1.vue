<template>
  <div class="in-container">
    <input type="text" v-model="inVal">
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps(['outVal'])
const emits = defineEmits(['inVal'])

const inVal = ref('')

watch(() => { return props.outVal }, (newval, oldval) => {
  inVal.value = newval
})

watch(inVal, (newval, oldval) => {
  emits('inVal', newval)
})
</script>
<style scoped>
.in-container {
  background-color: bisque;
}
</style>