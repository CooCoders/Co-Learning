import { defineStore } from 'pinia'

const useCartStore = defineStore('cartStore', {
  state() {
    return {
      cartList: []
    }
  },

  actions: {
    addToCart(product) {
      const p = this.cartList.find((value) => {
        return value.id === product.id
      })

      if (p) {
        p.quantity++
      } else {
        this.cartList.push({
          ...product,
          quantity: 1
        })
      }
      product.inventory--
    }
  },
  getters: {
    totalPrice() {
      return this.cartList.reduce((sum, cl) => {
        sum += cl.price * cl.quantity
        return sum
      }, 0)
    }
  }
})

export default useCartStore