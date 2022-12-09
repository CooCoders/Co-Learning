<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Test from './components/Test.vue'
// import Test2 from './components/Test2.vue'
// import ReactivityDemo from './components/ReactivityDemo.vue'
// import ComputedProp from './components/ComputedProp.vue'
// import ClassBindVue from './components/ClassBind.vue'
// import ListDemoVue from './components/ListDemo.vue'
import ReviewVue from './components/Review.vue'
import LifeCycleVue from './components/LifeCycle.vue'
import WatcherVue from './components/Watcher.vue'
</script>

<template>
  <div class="container">
    <!-- <Test></Test>
    <Test2></Test2>
    <ReactivityDemo></ReactivityDemo>
    <ComputedProp></ComputedProp> -->
    <!-- <ClassBindVue></ClassBindVue> -->
    <!-- <ListDemoVue></ListDemoVue> -->
    <!-- <ReviewVue></ReviewVue> -->
    <!-- <LifeCycleVue></LifeCycleVue> -->
    <WatcherVue></WatcherVue>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-between;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
