import { defineStore } from 'pinia'

const useCountStore = defineStore('countStore', {
  state: () => {
    return {
      count: 0,
      text: 'original text'
    }
  },
  actions: {
    add() {
      this.count++
    },
    sub() {
      this.count--
    },
    chg(text) {
      this.text = text
    }
  }
})

export default useCountStore