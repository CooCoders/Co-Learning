<template>
  <div
    class="inside"
    :class="[{ 'active-c': tag3 }, { 'border-s': tag3 }]"
  ></div>
  <button @click="chg">chg</button>

  <hr />
  <button @click="isshow = !isshow">show</button>
  <h3 v-if="isshow">Show some text?</h3>
  <h3 v-else>Other text.</h3>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const isAct = ref(true)

const tag1 = ref(0)
const tag2 = ref(3)
const isShow = computed(() => {
  return tag1.value + tag2.value > 5
})

const tag3 = ref(false)
const chg = () => {
  tag3.value = true
}

const class1 = ref('active-c')
const class2 = ref('border-s')

const isshow = ref(true)
</script>
<style scoped>
.inside {
  height: 200px;
  width: 200px;
  background-color: lightblue;
}
.active-c {
  background-color: bisque;
}

.border-s {
  border: 1px solid black;
}
</style>
