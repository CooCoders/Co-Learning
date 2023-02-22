<template>
  <div class="in-container">
    <input type="text" v-model="outVal" @input="inVal = $event.target.value">
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps(['outVal'])
const emits = defineEmits(['inVal'])

let outVal = ref('')
outVal.value = props.outVal
watch(() => { return props.outVal }, (newval, oldval) => {
  outVal = newval
})

let inVal = ref('')
watch(inVal, (newval, oldval) => {
  emits('inVal', inVal.value)
})

</script>
<style scoped>
.in-container {
  background-color: bisque;
}
</style>