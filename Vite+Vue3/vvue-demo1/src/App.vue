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
import RootVue from './components/props/Root.vue'
// import ParentVue from './components/review/Parent.vue'
// import ParentVue from './components/fallthrough-attrs/Parent.vue'
// import DemoVue from './components/slots/Demo.vue'
import DemoVue from './components/inject-value/Demo.vue'
import ParentVue from './components/review/Parent.vue'
import HooksVue from './components/composition-functions/Hooks.vue'
import CDemoVue from './components/customize-directives/CDemo.vue'
import RDemoVue from './components/routers/RDemo.vue'
// import MainVue from './components/pinia/Main.vue'
import PRootVue from './components/review/PRoot.vue'
import ProductVue from './components/pinia/Product.vue'
import MainVue from './components/review/pinia/Main.vue'
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
    <!-- <WatcherVue></WatcherVue> -->
    <!-- <GC></GC> -->
    <!-- <RootVue></RootVue> -->
    <!-- <ParentVue></ParentVue> -->
    <!-- <DemoVue></DemoVue> -->
    <!-- <ParentVue></ParentVue> -->
    <!-- <HooksVue></HooksVue> -->
    <!-- <CDemoVue></CDemoVue> -->
    <RDemoVue></RDemoVue>
    <!-- <MainVue></MainVue> -->
    <!-- <PRootVue></PRootVue> -->
    <!-- <ProductVue></ProductVue> -->
    <!-- <MainVue></MainVue> -->
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
