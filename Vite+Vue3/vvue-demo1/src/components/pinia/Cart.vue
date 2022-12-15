<!-- 购物车组件 -->
<template>
  <div>
    <h3>Cart list:</h3>
    <ul>
      <li v-for="item in cartStorage.cartList">
        {{ item.id }} -- {{ item.name }} -- {{ item.quantity }}
      </li>
    </ul>
    <div>
      <hr />
      <p>Total sum: {{ cartStorage.totalPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useCartStore from './store/cartStore.js'

const cartStorage = useCartStore()
</script>
<style scoped></style>
