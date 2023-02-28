import {defineStore} from 'pinia'

const useCounterStore = defineStore('counterStore',{
  state(){
    return{
      count: 0,
      price: 10
    }
  },
  actions:{
    add(){
      this.count++
    },
    sub(){
      this.count--
    }
  },
  getters:{
    getPrice(){
      return this.count * this.price
    }
  }
})

export default useCounterStore