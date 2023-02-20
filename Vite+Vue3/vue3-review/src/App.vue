<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Rev1 from './components/Rev1.vue'
import Counter from './components/Counter.vue'
import Review1 from './components/Review1.vue'
import Review2 from './components/Review2.vue'
import Review3 from './components/Review3.vue'
import Board from './components/Board.vue'
import Watch from './components/Watch.vue'
</script>

<template>
  <div>
    <!-- <Counter></Counter> -->
    <!-- <Review3></Review3> -->
    <!-- <Board></Board> -->
    <Watch></Watch>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  height: 100%;
}
</style>
