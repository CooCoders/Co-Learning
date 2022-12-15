import { defineStore } from 'pinia'
import axios from 'axios'


const useProductStore = defineStore('productStore', {
  state() {
    return {
      products: []
    }
  },

  actions: {
    async loadData() {
      let results = await axios.get('http://localhost:9000/data')
      this.products = results.data
    },
    addData() {
      axios.post('http://localhost:9000/data', {
        id: 4,
        name: "Good4"
      })
    }
  }
})

export default useProductStore