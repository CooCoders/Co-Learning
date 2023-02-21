<template>
  <div class="ccontainer">
    In component:{{ props }}
    <p>{{ comment }}</p>
    <button @click="chg">chg</button>
  </div>
</template>

<script setup>

import { ref, reactive, watch } from 'vue'

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
const emit = defineEmits({
  'getComment': (val) => {
    if (val.value === 'abc') {
      console.log('illegal!')
      return false
    } else {
      console.log(val)
      return true
    }
  }
})

const chg = () => {
  comment.value = 'abc'
}

watch(comment, (newval, oldval) => {
  emit('getComment', comment)
})
</script>
<style scoped>
.ccontainer {
  height: 200px;
  width: 200px;
  background-color: bisque;
}
</style>