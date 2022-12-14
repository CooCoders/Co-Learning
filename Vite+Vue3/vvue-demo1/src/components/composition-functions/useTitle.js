// import { onMounted, onUpdated } from 'vue'

// const useTitle = (count) => {
//   onMounted(() => {
//     document.title = count.value
//   })

//   onUpdated(() => {
//     document.title = count.value
//   })
// }


// export default useTitle

import { onMounted, onUpdated } from "vue"
const useTitle = (count) => {
  onMounted(() => {
    document.title = count.value
  })

  onUpdated(() => {
    document.title = count.value
  })
}
export default useTitle