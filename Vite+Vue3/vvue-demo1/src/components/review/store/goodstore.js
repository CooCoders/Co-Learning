import { defineStore } from 'pinia'

const useGoodStore = defineStore('goodStore', {
  state: () => {
    return {
      goods: [{
        name: 'aaaa',
        amount: 10
      }, {
        name: 'bbbb',
        amount: 20
      },
      {
        name: 'cccc',
        amount: 20
      }],
      cou: 10,
      test: [
        1, 2, 3, 4
      ]
    }
  }
})

export default useGoodStore

