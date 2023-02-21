<template>
  <div class="ccontainer">
    In component:{{ props }}
    <p>{{ comment }}</p>
    <!-- <button @click="$emit('testevnt', comment.value)">send</button> -->
    <button @click="$emit('getComment', comment)">comments</button>
  </div>
</template>

<script setup>

import { ref, reactive } from 'vue'

const props = defineProps({
  name: String,
  age: [String, Number],
  gender: {
    type: String,
    required: true,
    default: 'man'
  }
})

const comment = ref('some texts')
const emit = defineEmits(['testevent'])
const send = () => {
  emit('testevent', comment.value)
}

</script>
<style scoped>
.ccontainer {
  height: 200px;
  width: 200px;
  background-color: bisque;
}
</style>