<!-- Main page -->
<template>
  <div class="main-container">
    <h3>Main page</h3>
    <div class="main">
      <ProductsVue></ProductsVue>
      <CartsVue></CartsVue>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ProductsVue from './Products.vue'
import CartsVue from './Carts.vue'
</script>
<style scoped>
.main-container {
  height: 500px;
  width: 100%;
  background-color: bisque;
}

.main {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
}
</style>
