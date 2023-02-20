<template>
  <div>{{ text }}</div>
  <input type="text" v-model.lazy="text">
  <div>
    {{ obj.count }}
  </div>
  <button @click="add">add</button>

  <hr>
  <label for="ipt">Some texts: </label>
  <input type="text" id="ipt" ref="ipta">

  <hr>
  <div>
    {{ testobj }}
  </div>
  <button @click="chg">chg</button>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'

const text = ref('')

watch(text, (newVal, oldVal) => {
  console.log(newVal)
  console.log(oldVal)
})

/* watch(text, async(newVal, oldVal)=>{
  try{
    const res = await fetch('...')
    text.value = (await res.json()).answer
  }catch(err){
    console.log(err.message)
  }
}) */

const obj = ref({ count: 1 })

watch(() => { obj.count }, (newVal, oldVal) => {
  console.log(oldVal, '-->', newVal)
})
const add = () => {
  obj.value.count++
}

const ipta = ref(null)
onMounted(() => {
  ipta.value.focus()
})

const testobj = reactive({ name: 'zs', age: 10 })
const chg = () => {
  testobj.name = 'ls'
}
watch(testobj.name, (newval, oldval) => {
  console.log(newval)
  console.log(oldval)
  console.log(newval === oldval)
}, { deep: true })
</script>
<style scoped></style>