import { defineStore } from 'pinia'


const useProductStore = defineStore('productStore', {
  state() {
    return {
      products: [
        {
          id: 1,
          name: 'Good1',
          price: 2000,
          inventory: 3
        },
        {
          id: 2,
          name: 'Good2',
          price: 3000,
          inventory: 3
        },
        {
          id: 3,
          name: 'Good3',
          price: 40000,
          inventory: 2
        }
      ]
    }
  },

  actions: {
    print() {
      console.log('some text')
    }
  }
})

export default useProductStore