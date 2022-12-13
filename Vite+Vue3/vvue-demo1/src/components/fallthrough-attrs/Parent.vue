<!-- 透传 fallthrough -->
<template>
  <div>
    <p class="tb">asdfgefew</p>
    <ChildVue class="a" title="test"></ChildVue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ChildVue from './Child.vue'
</script>
<style>
.a {
  font-size: 20px;
}

.te {
  color: red;
}
</style>
