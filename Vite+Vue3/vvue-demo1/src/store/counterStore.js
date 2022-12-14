import { defineStore } from 'pinia'

const useCounterStore = defineStore('counterStore', {
  state() {
    return {
      count: 0
    }
  },

  actions: {
    add() {
      this.count++
    },
    sub() {
      this.count--
    }
  }
})

export default useCounterStore