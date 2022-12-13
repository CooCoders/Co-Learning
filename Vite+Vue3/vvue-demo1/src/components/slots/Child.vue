<template>
  <div>
    <p>child comp</p>
    <slot>somt text from child</slot>
    <!-- 具名插槽 -->
    <slot name="text2"></slot>
    <slot name="text3"></slot>

    <!-- 作用域插槽 -->
    <slot :mark="mark1" :mark2="mark2"></slot>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const mark1 = ref('!!!!!')
const mark2 = ref('@@@@')
</script>
<style scoped></style>
