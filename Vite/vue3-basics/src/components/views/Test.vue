<!-- Test component -->
<template>
  <div>
    <h3>this is a test sentence</h3>
    {{ count }}
    <!-- <button v-on="click()">add</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    click() {
      this.count += 1
    },
  },
}
</script>
<style lang="css" scoped>
h3 {
  color: red;
}
</style>
