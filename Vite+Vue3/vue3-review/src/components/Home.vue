<!-- Home component -->
<template>
  <div class="container">
    <div class="header">
      <h3>Main page</h3>&nbsp;
      <router-link to="/">Main Page</router-link>&nbsp;
      <router-link to="/pagea">pagea</router-link>&nbsp;
      <router-link to="/pageb">pageb</router-link>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

</script>
<style scoped>
.container {
  height: 25rem;
  width: 700px;
  background-color: lightgray;
}

.header {
  height: 5rem;
}
</style>