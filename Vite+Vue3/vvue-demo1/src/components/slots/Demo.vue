<!-- slot -->
<template>
  <div>
    <ChildVue>
      <!-- <div>text1 from parent</div> -->
      <!-- 具名插槽 -->
      <template v-slot:text2>
        <div>text2 from parent</div>
      </template>

      <template #text3>
        <div>text3 from parent</div>
      </template>

      <!-- 作用域插槽 -->
      <!-- <template v-slot:default="data">
        <p>{{ data.mark }} --- {{ data.mark2 }}</p>
      </template> -->

      <template v-slot:default="{ mark, mark2 }">
        <p>{{ mark }} --- {{ mark2 }}</p>
      </template>
    </ChildVue>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ChildVue from './Child.vue'
</script>
<style scoped></style>
