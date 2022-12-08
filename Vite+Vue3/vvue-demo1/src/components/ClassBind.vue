<!-- class 和 style 的动态绑定 -->
<template>
  <div>
    <h3>class & style dynamic bind</h3>
    <p :style="{ textDecoration: ul }" :class="[chgFont, { chgColor: tag }]">
      some texts
    </p>
    <button @click="chgFontSize">change</button>
    <button @click="chgUnderline">change2</button>

    <hr />
    <ul @click="liClick">
      <li>li 1</li>
      <li>li 2</li>
      <li>li 3</li>
      <li>li 4</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const tag = ref(false)
const ul = ref('underline')
const chgFont = ref('chg-fontsize')
const chgColor = ref('chgColor')

const liClick = (e) => {
  console.log(e.target)
}

const chgFontSize = () => {
  tag.value = !tag.value
}

const chgUnderline = () => {
  ul.value = 'none'
}
</script>
<style scoped>
ul {
  margin-top: 10px;
  margin-left: 10px;
}
.chgColor {
  color: red;
}

.chg-fontsize {
  font-size: 20px;
}
</style>
