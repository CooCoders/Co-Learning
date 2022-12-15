import { defineStore } from 'pinia'

const useCountStore = defineStore('countStore', {
  state: () => {
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

export default useCountStore