<template>
  <div>
    <h3>Product list:</h3>
    <ul>
      <template v-for="item in pstorage.products">
        <li>
          {{ item.id }} -- {{ item.name }} -- {{ item.price }}
          <button
            @click="cartStorage.addToCart(item)"
            :disabled="item.inventory <= 0"
          >
            加入购物车
          </button>
        </li>
      </template>
    </ul>

    <hr />
    <CartVue></CartVue>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useProductStorage from './store/productStore.js'
import useCartStore from './store/cartStore.js'
import CartVue from './Cart.vue'

const pstorage = useProductStorage()
const cartStorage = useCartStore()
// const { products } = storeToRefs(pstorage)

onMounted(() => {
  pstorage.loadData()
  // pstorage.addData()
})
</script>
<style scoped>
* {
  margin: 5px;
}
</style>
