<template>
  <div class="te">some text</div>
</template>
<script>
export default {
  inheritAttrs: false,
}
</script>
<script setup>
import { ref, reactive, useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs.class)
console.log(attrs.title)
</script>
<style>
.tb {
  color: yellow;
}
</style>
