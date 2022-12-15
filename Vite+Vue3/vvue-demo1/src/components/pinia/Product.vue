<template>
  <div>
    <h3>Product list:</h3>
    <ul>
      <li v-for="item in products">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useProductStorage from './store/productStore.js'

const pstorage = useProductStorage()
const { products } = storeToRefs(pstorage)
</script>
<style scoped></style>
