<!-- 测试路由插件 -->
<template>
  <div class="inside">
    <p>some text</p>
    <router-link to="/">Main page</router-link>&nbsp;
    <router-link to="/left">LEFT</router-link>&nbsp;
    <router-link to="/right">RIGHT</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style scoped>
.inside {
  background-color: aquamarine;
  width: 100%;
}
</style>
